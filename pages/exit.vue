<template>
  <div class="" />
</template>

<script>
export default {
  layout: 'blank',
  // 使用中间件自动发起请求
  middleware: async (ctx) => {
    const { status, data } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>
