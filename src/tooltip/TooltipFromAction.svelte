<script lang="ts">
	export let title: string;
	export let x: number;
	export let y: number;
</script>
<div 

style="
		top: {y + 7}px;
		left: {x - 100}px;"
		class="bg-white rounded p-2 absolute shadow-sm overflow-x-hidden">{title}</div>

