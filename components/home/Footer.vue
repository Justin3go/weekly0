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
			<a
				class="ml-6"
				href="https://www.producthunt.com/posts/usesora?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-usesora"
				target="_blank"
				><img
					:src="`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=440546&theme=${
						themeCookie || 'light'
					}`"
					alt="UseSora - Collecting&#0032;the&#0032;highest&#0032;quality&#0032;prompts&#0032;for&#0032;Sora | Product Hunt"
					style="width: 180px; height: 40px"
			/></a>
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
