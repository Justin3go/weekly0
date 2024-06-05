<template>
	<div class="px-lg-16 mx-lg-16 px-md-8 mx-md-8">
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
	ogTitle: "UseSora",
	ogDescription: `Collecting the highest quality prompts for Sora, providing creators, researchers, and technology enthusiasts with a tool for sharing, exploring, and discovering the latest Sora video creations.`,
	ogImage: "https://usesora.app/logobg.png'",
	twitterCard: "summary",
});
</script>

<style lang="scss" scoped>
main {
	min-width: 888px;
	min-height: calc(100vh - 60px);
}
</style>
