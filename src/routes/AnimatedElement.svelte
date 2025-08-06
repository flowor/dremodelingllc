<script lang="ts">
    import { slide } from 'svelte/transition';
    import { inview } from 'svelte-inview';
	import { quintOut } from 'svelte/easing';
  
    let isInView: boolean;
    let delay: number;
  </script>
  
  <div
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
      isInView = detail.inView;
    }}
  >
    {#if isInView}
      <div in:slide={{ delay: delay, duration: 2000, easing: quintOut, axis:'y'}}>
        <slot />
      </div>
    {/if}
  </div>
  
  <style>
  
  </style>