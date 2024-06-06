<template>
	<header>
		<v-sheet
			class="px-4 d-flex justify-space-between"
			:height="60"
			width="100%"
			border
		>
			<span class="text-h5 font-italic font-weight-thin d-flex align-center">
				<SvgPoint style="height: 40px; width: 40px"></SvgPoint>
				<span>weekly0 - 优质周刊集合</span>
			</span>
			<span class="d-flex align-center">
				<v-btn
					class="text-capitalize mr-4"
					color="primary"
					variant="tonal"
					href="https://github.com/Justin3go/weekly0/blob/master/server/data/soraList.ts"
					target="_blank"
					>提交周刊</v-btn
				>
				<v-btn
					icon="mdi-theme-light-dark"
					variant="text"
					@click="toggleTheme"
				></v-btn>
				<v-btn
					icon="mdi-github"
					variant="text"
					href="https://github.com/Justin3go/weekly0"
					target="_blank"
				></v-btn>
			</span>
		</v-sheet>
	</header>
	<div class="header-placeholder"></div>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const themeCookie = useCookie("theme", { expires: new Date("9999-12-31") });

function toggleTheme() {
	const lightOrDark = theme.global.current.value.dark ? "light" : "dark";
	theme.global.name.value = lightOrDark;
	themeCookie.value = lightOrDark;
}
</script>

<style lang="scss" scoped>
header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;

	width: 100vw;
	min-width: 400px;
}
.header-placeholder {
	height: 60px;
}
</style>
