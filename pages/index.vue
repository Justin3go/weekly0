<template>
	<div class="px-xl-16 mx-xl-16 mx-lg-8">
		<main>
			<HomeList></HomeList>
		</main>
		<footer>
			<HomeFooter></HomeFooter>
		</footer>
	</div>
</template>

<script lang="ts" setup>

useSeoMeta({
	ogTitle: "weekly0 - 优质周刊集合",
	ogDescription: `收刮中文互联网上的奇迹...`,
	ogImage: "https://weekly0.com/cover.png'",
	twitterCard: "summary_large_image",
});
</script>

<style lang="scss" scoped>
main {
	min-width: 1250px;
	min-height: calc(100vh - 60px);
}
</style>
