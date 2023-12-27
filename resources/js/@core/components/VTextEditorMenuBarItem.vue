<template>
  <button
    class="menu-item"
    :class="{ 'is-active': isActive ? isActive(): null }"
    @click="action"
    :title="title"
  >
    <VIcon
      size="22"
      :icon="`${icon}`"
    />
  </button>
</template>

<script>

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    action: {
      type: Function,
      required: true,
    },

    isActive: {
      type: Function,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.menu-item {
  width: 1.75rem;
  height: 1.75rem;
  color: #fff;
  border: none;
  background-color: transparent;
  border-radius: 0.4rem;
  padding: 0.25rem;
  margin-right: 0.25rem;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  &.is-active,
  &:hover {
    color: #FFF;
    background-color: #5d6174;
  }
}
</style>
