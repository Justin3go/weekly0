<template>
	<div class="list-container">
		<v-card>
			<template v-slot:text>
				<v-text-field
					v-model="search"
					label="Search for high-quality prompts"
					prepend-inner-icon="mdi-magnify"
					single-line
					variant="outlined"
					clearable
					hide-details
				></v-text-field>
				<div class="d-flex justify-center flex-wrap">
					<span v-for="word in topWords" class="mx-1 mt-2" :key="word">
						<v-btn
							class="text-capitalize"
							size="small"
							variant="tonal"
							@click="search = word"
						>
							{{ word }}
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
				item-value="prompt"
				loading-text="Loading... Please wait"
				@update:page="backToTop"
			>
				<template v-slot:item.prompt="{ item }">
					<div>
						{{ item.prompt }}
					</div>
				</template>
				<template v-slot:item.homepage="{ item }">
					<v-btn
						class="text-capitalize"
						color="primary"
						variant="text"
						:href="item.homepage"
						target="_blank"
					>
						Go to Page
					</v-btn>
				</template>
				<template v-slot:item.video="{ item }">
					<v-card class="my-2" elevation="2" rounded>
						<iframe
							width="192"
							height="108"
							:src="item.video"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</v-card>
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
			</v-data-table>
		</v-card>
	</div>
</template>

<script lang="ts" setup>
const expanded = ref([]);
const search = ref("");

type THeaders = {
    title: string;
    align?: 'start' | 'center' | 'end';
    key: string;
    sortable?: boolean;
    width?: string;
};
const headers: THeaders[] = [
	{
		title: "Prompt",
		align: "start",
		key: "prompt",
	},
	{ title: "Author", sortable: false, key: "author" },
	{ title: "Publish", width: "120px", key: "publish" },
	{ title: "HomePage", sortable: false, align: "center", key: "homepage" },
	{ title: "Star", key: "star" },
	{ title: "Preview", sortable: false, key: "video" },
];

interface IListItem {
	prompt: string;
	author: string;
	homepage: string;
	video: string;
	publish: string;
	star?: boolean;
}

interface ISoraData {
	data: Ref<IListItem[]>;
	pending: Ref<boolean>;
}

const { data: soraData, pending }: ISoraData = await useFetch("/api/sora", {
	query: { search },
});
const { data: topWords } = await useFetch("/api/topWords");

const store = useMyFavoritesListStore();
const dataList = computed(() => {
	const favoriteSet = new Set(store.favoritesList.map((item) => item.prompt));
	return soraData?.value?.map((item) => ({
		...item,
		star: favoriteSet.has(item.prompt),
	}));
});

function starItem(item: any) {
	if (item.star) {
		store.addFavorite(item);
	} else {
		store.removeFavorite(item);
	}
}

function backToTop() {
	window.scrollTo({ top: 0 });
}
</script>

<style></style>
