<script setup>
  import AddNewRobotDrawer from '@/views/pages/robots/AddNewRobotDrawer.vue';
  definePage({
    meta: {
      action: 'monitor',
      subject: 'own',
    },
  });

  const isAddNewRobotDrawerVisible = ref(false)

  const headers = [
    {
      title: 'User',
      key: 'name'
    },
    {
      title: 'Email',
      key: 'email'
    },
    {
      title: 'Created at',
      key: 'created_at'
    }
  ]
</script>
<template>
  <section>
    <VCard>
      <VCardText class="d-flex flex-wrap py-4 gap-4">
        <div class="me-3 d-flex gap-3">
          <AppSelect
          
            :items="[
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: '100' },
              { value: -1, title: 'All' },
            ]"
            style="inline-size: 6.25rem;"
          />
        </div>
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Add user button -->
          <VBtn
            prepend-icon="tabler-plus"
            @click="isAddNewRobotDrawerVisible = true"
          >
            Add new robot
          </VBtn>
        </div>
      </VCardText>
      <VDivider/>
    </VCard>

    <AddNewRobotDrawer
      v-model:isDrawerOpen="isAddNewRobotDrawerVisible"
    />
  </section>
</template>
