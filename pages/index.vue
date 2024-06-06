<template>
	<div class="px-lg-16 mx-lg-16">
		<main>
			<HomeList></HomeList>
		</main>
		<footer>
			<HomeFooter></HomeFooter>
		</footer>
	</div>
</template>

<script lang="ts" setup>
// TODO
useSeoMeta({
	ogTitle: "Weekly0 - 优质周刊集合",
	ogDescription: `收刮互联网上的奇迹...`,
	ogImage: "https://weekly0.com/logobg.png'",
	twitterCard: "summary",
});
</script>

<style lang="scss" scoped>
main {
	min-width: 1115px;
	min-height: calc(100vh - 60px);
}
</style>
