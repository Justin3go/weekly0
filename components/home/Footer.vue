<template>
	<div class="my-2 d-flex justify-space-between">
		<span class="d-flex">
			<v-btn
				class="text-capitalize"
				variant="text"
				href="https://github.com/Justin3go/usesora?tab=MIT-1-ov-file"
				target="_blank"
				>MIT License</v-btn
			>
			<v-btn
				class="text-capitalize"
				variant="text"
				href="mailto:just@justin3go.com?subject=Usesora%20Contract"
				target="_blank"
				>Contract Me</v-btn
			>
		</span>
		<v-btn
			class="text-capitalize"
			variant="text"
			append-icon="mdi-arrow-up"
			@click="backToTop"
			>Back To Top</v-btn
		>
	</div>
</template>

<script lang="ts" setup>
const themeCookie = useCookie("theme");

function backToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style></style>
