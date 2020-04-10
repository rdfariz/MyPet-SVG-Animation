<template>
  <div>
    <p>Ini departemen  {{ params }}</p>
  </div>
</template>
<script>
export default {
  asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    return { params }
  }
}
</script>
