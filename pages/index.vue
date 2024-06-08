<template>
	<div v-if="mobile && isMobileByUserAgent">
		感谢您的访问，该站点暂不支持移动端，请使用电脑访问...
	</div>
	<div v-else class="px-xl-16 mx-xl-16 mx-lg-8">
		<main>
			<HomeList></HomeList>
		</main>
		<footer>
			<HomeFooter></HomeFooter>
		</footer>
	</div>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
const isMobileByUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	navigator?.userAgent
);

useSeoMeta({
	ogTitle: "weekly0 - 优质周刊集合",
	ogDescription: `收刮中文互联网上的奇迹...`,
	ogImage: "https://weekly0.com/cover.png'",
	twitterCard: "summary_large_image",
	// @ts-ignore
	twitterImageSrc: "https://weekly0.com/cover.png",
});
</script>

<style lang="scss" scoped>
main {
	min-width: 1250px;
	min-height: calc(100vh - 60px);
}
</style>
