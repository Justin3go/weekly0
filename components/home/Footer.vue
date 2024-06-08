<template>
	<div class="my-2 d-flex justify-space-between">
		<span class="d-flex">
			<v-btn
				class="text-capitalize"
				variant="plain"
				href="mailto:just@justin3go.com?subject=Usesora%20Contract"
				target="_blank"
				>邮件联系</v-btn
			>
			<v-btn
				class="text-capitalize"
				variant="plain"
				href="https://x.com/Justin1024go"
				target="_blank"
				>推特/X</v-btn
			>
		</span>
		<v-btn
			class="text-capitalize"
			variant="plain"
			append-icon="mdi-arrow-up"
			@click="backToTop"
			>回到顶部</v-btn
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
