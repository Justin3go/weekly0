<template>
	<v-dialog v-model="isVisible" fullscreen>
		<template v-slot:activator="{ props: activatorProps }">
			<v-btn
				v-bind="activatorProps"
				class="text-lowercase"
				color="primary"
				variant="text"
			>
				{{ label }}
			</v-btn>
		</template>

		<template v-slot:default="{ isActive }">
			<v-card>
				<div class="mx-4 d-flex align-center justify-space-between">
					<v-btn
						class="text-lowercase"
						variant="text"
						:href="props.webSite"
						target="_blank"
					>
						{{ label }}
					</v-btn>
					<v-btn variant="text" icon="mdi-close" @click="isActive.value = false"> </v-btn>
				</div>
				<iframe
					:src="props.webSite"
					class="iframe-container"
					frameborder="0"
				></iframe>
			</v-card>
		</template>
	</v-dialog>
</template>
<script setup lang="ts">
interface IProps {
	webSite: string;
}
const props = defineProps<IProps>();

const label = computed(() =>
	props.webSite.match(/:\/\/(.[^/]+)/)?.[1].replace(/^(www\.)/, "")
);

const isVisible = ref(false);
watch(isVisible, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>
<style lang="scss" scoped>
.iframe-container {
	width: 100%;
	height: 100%;
}

.v-btn--size-default {
	padding: 0 2px !important;
}
</style>
