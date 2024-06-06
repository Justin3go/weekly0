<template>
	<div class="list-container">
		<v-card>
			<template v-slot:text>
				<v-text-field
					v-model="search"
					label="收刮中文互联网上的奇迹..."
					prepend-inner-icon="mdi-magnify"
					single-line
					variant="outlined"
					clearable
					hide-details
				></v-text-field>
				<div class="d-flex justify-center flex-wrap">
					<span v-for="tag in topTags" class="mx-1 mt-2" :key="tag">
						<v-btn
							class="text-capitalize"
							size="small"
							variant="tonal"
							@click="search = tag"
						>
							{{ tag }}
						</v-btn>
					</span>
				</div>
			</template>

			<v-data-table
				v-model:expanded="expanded"
				:headers="headers"
				:items="dataList"
				:loading="pending"
				:items-per-page="10"
				:items-per-page-options="[5, 10, 20]"
				item-value="description"
				loading-text="加载中... 请稍等"
				@update:page="backToTop"
			>
				<template v-slot:item.logo="{ item }">
					<v-avatar :image="item.logo" rounded="sm"></v-avatar>
				</template>
				<template v-slot:item.tags="{ item }">
					<v-chip size="small" class="mr-1 mb-1" v-for="tag in item.tags">
						{{ tag }}
					</v-chip>
				</template>
				<template v-slot:item.author="{ item }">
					<v-btn
						class="text-capitalize"
						color="primary"
						variant="text"
						:href="item.authorLink"
						target="_blank"
					>
						@{{ item.author }}
					</v-btn>
				</template>
				<template v-slot:item.description="{ item }">
					<div style="min-width: 200px" class="three-line-ellipsis">
						{{ item.description }}
					</div>
				</template>
				<template v-slot:item.rss="{ item }">
					<v-btn
						color="primary"
						:disabled="!item.rss"
						variant="text"
						@click="copy(item.rss)"
					>
						点击复制
					</v-btn>
				</template>
				<template v-slot:item.webSite="{ item }">
					<v-btn
						class="text-lowercase"
						color="primary"
						variant="text"
						:href="item.webSite"
						target="_blank"
					>
						{{ item.webSite.match(/:\/\/(.[^/]+)/)[1].replace(/^(www\.)/, "") }}
					</v-btn>
				</template>
				<template v-slot:item.isFree="{ item }">
					<v-chip :color="item.isFree ? 'green' : 'red'">
						{{ item.isFree ? "免费" : "付费" }}
					</v-chip>
				</template>
				<template v-slot:item.star="{ item }">
					<ClientOnly>
						<v-checkbox
							v-model="item.star"
							:messages="item.star ? 'starred' : 'star it'"
							false-icon="mdi-star-plus-outline"
							true-icon="mdi-star-check"
							@update:modelValue="() => starItem(item)"
						></v-checkbox>
						<template #placeholder>
							<v-checkbox
								:model-value="false"
								messages="star it"
								false-icon="mdi-star-plus-outline"
								true-icon="mdi-star-check"
							></v-checkbox>
						</template>
					</ClientOnly>
				</template>
				<template v-slot:item.preview="{ item }">
					<v-btn
						class="text-lowercase"
						color="primary"
						variant="text"
						:href="item.webSite"
						target="_blank"
					>
						{{ item.webSite.split("://")[1] }}
					</v-btn>
				</template>
			</v-data-table>
		</v-card>
		<v-snackbar v-model="snackbarVisible">
			{{ snackbarText }}

			<template v-slot:actions>
				<v-btn
					color="pink"
					icon="mdi-close"
					variant="text"
					@click="snackbarVisible = false"
				>
				</v-btn>
			</template>
		</v-snackbar>
	</div>
</template>

<script lang="ts" setup>
import { copyText } from "../../utils/copyText";

const expanded = ref([]);
const search = ref("");

type THeaders = {
	title: string;
	align?: "start" | "center" | "end";
	key: string;
	sortable?: boolean;
	width?: string;
};
const headers: THeaders[] = [
	{ title: "", sortable: false, align: "end", key: "logo" },
	{ title: "标题", width: "120px", align: "start", key: "title" },
	{ title: "标签", width: "200px", align: "start", key: "tags" },
	{ title: "简介", sortable: false, key: "description" },
	{ title: "作者", key: "author" },
	{ title: "RSS地址", align: "center", sortable: false, key: "rss" },
	{ title: "网站地址", width: "120px", key: "webSite" },
	{ title: "是否付费", width: "130px", key: "isFree" },
	{ title: "收藏", width: "90px", key: "star" },
	// { title: "预览", sortable: false, key: "preview" },
];

interface IListItem {
	logo: string;
	title: string;
	tags: string[];
	author: string;
	authorLink: string;
	description: string;
	rss: string;
	webSite: string;
	isFree: boolean;
	star?: boolean;
}

interface IWeeklyData {
	data: Ref<IListItem[]>;
	pending: Ref<boolean>;
}

const { data: weeklyData, pending }: IWeeklyData = await useFetch(
	"/api/weeklyData",
	{
		query: { search },
	}
);
const { data: topTags } = await useFetch("/api/topTags");

const store = useMyFavoritesListStore();
const dataList = computed(() => {
	const favoriteSet = new Set(store.favoritesList.map((item) => item.webSite));
	return weeklyData?.value?.map((item) => ({
		...item,
		star: favoriteSet.has(item.webSite),
	}));
});

function starItem(item: any) {
	if (item.star) {
		store.addFavorite(item);
	} else {
		store.removeFavorite(item);
	}
}

const snackbarVisible = ref(false);
const snackbarText = ref("");
function copy(text: string) {
	copyText(text);
	snackbarText.value = `RSS链接已复制到剪贴板`;
	snackbarVisible.value = true;
}

function backToTop() {
	window.scrollTo({ top: 0 });
}
</script>

<style lang="scss" scoped>
.list-container {
	min-width: 1115px;

	.v-btn--size-default {
		padding: 0 2px !important;
	}

	.three-line-ellipsis {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
</style>
