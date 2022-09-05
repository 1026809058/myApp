<template>
	<Card :height="height">
		<title>1231</title>
	</Card>
</template>

<script>
import Card from '@/pages/component/Card.vue';
export default {
	components: { Card },
	props: {
		height: {
			type: Number | String,
			default: 50
		}
	},
	data() {
		return {};
	}
};
</script>

<style></style>
