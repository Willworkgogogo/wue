<template>
	<aside class="sider">
		<slot></slot>
	</aside>
</template>

<script type="text/ecmascript-6">
export default {
	name: 'WSider'
};
</script>

<style scoped lang="scss">
.sider {
	position: relative;
	transition: all 0.2s;
}
</style>
