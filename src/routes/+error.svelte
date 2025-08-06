<script>
    import { page } from '$app/stores';
  </script>

  <div class="text-center slide-fade-in-animation p-4 mt-20">
    <h1 class="block text-4xl leading-tight font-medium">{$page.status} - {$page?.error?.message}</h1>
    <a
    href="/"
    class="inline-block mt-4 text-white font-bold px-6 py-3 rounded mb-4 bg-ssdblue-950 active:bg-ssdblue-800 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
    >Navigate Back Home</a
  >
  </div>