<script setup>

  import { VDataTableServer } from 'vuetify/labs/VDataTable'
  import AddNewVehicleDrawer from '@/views/pages/vehicle/AddNewVehicleDrawer.vue';
  import { paginationMeta } from '@api-utils/paginationMeta';
  definePage({
    meta: {
      action: 'monitor',
      subject: 'own',
    },
  });

  const isAddNewRobotDrawerVisible = ref(false)

  
  const addNewRobot = async userRobot => {
    await $api('/dashboard/admin/fleet', {
        method: 'POST',
        body: userRobot,
    })

    // refetch User
    fetchRobots()
  }

// 👉 Store
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const {
  data: robotsData,
  execute: fetchRobots,
} = await useApi(createUrl('/dashboard/admin/fleet', {
  query: {
    q: searchQuery,
    type:'vehicle',
    status: selectedStatus,
    plan: selectedPlan,
    role: selectedRole,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))



const robots = computed(() => robotsData.value.result.data)
const totalRobots = computed(() => robotsData.value.result.total)

const headers = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Number',
    key: 'number'
  },
  {
    title: 'Status',
    key: 'status'
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
            Add new vehicle
          </VBtn>
        </div>
      </VCardText>
      <VDivider/>
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="robots"
        :items-length="totalRobots"
        :headers="headers"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #item.name="{ item }">
         {{ item.name}}
        </template>
        <template #item.status="{ item }">
          <VChip
            color="success"
            size="small"
            label
          >
            {{ item.status }}
          </VChip>
        </template>
        <template #bottom>
          <VDivider />
          <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-disabled mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalRobots) }}
            </p>

            <VPagination
              v-model="page"
              :length="Math.ceil(totalRobots / itemsPerPage)"
              :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalRobots / itemsPerPage)"
            >
              <template #prev="slotProps">
                <VBtn
                  variant="tonal"
                  color="default"
                  v-bind="slotProps"
                  :icon="false"
                >
                  Previous
                </VBtn>
              </template>

              <template #next="slotProps">
                <VBtn
                  variant="tonal"
                  color="default"
                  v-bind="slotProps"
                  :icon="false"
                >
                  Next
                </VBtn>
              </template>
            </VPagination>
          </div>
        </template>
      </VDataTableServer>
    </VCard>

    <AddNewVehicleDrawer
      v-model:isDrawerOpen="isAddNewRobotDrawerVisible"
      @robot-data="addNewRobot"
    />
  </section>
</template>
