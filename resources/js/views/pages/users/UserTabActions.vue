<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'

import { paginationMeta } from '@api-utils/paginationMeta';

const route = useRoute()
definePage({
  meta: {
    action: 'manage',
    subject: 'permission',
  },
});


const headers = [
  {
    title: 'Id',
    key: 'id'
  },
  {
    title: 'Description',
    key: 'description'
  },
  {
    title: 'Ip address',
    key: 'ipAddress'
  },
  // {
  //   title: 'Route',
  //   key: 'route'
  // },
  {
    title: 'Created at',
    key: 'created_at'
  },
 
]

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
  fetchLogs()
}

const {
  data: logData,
  execute: fetchLogs,
} = await useApi(`/dashboard/admin/user/${ route.params.id }/actions`, {
  query: {
    q: searchQuery,
    status: selectedStatus,
    plan: selectedPlan,
    role: selectedRole,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
})

const logs = computed(() => logData.value.result.userActivities.data)
const total = computed(() => logData.value.result.userActivities.total)
</script>
<template>
    <VCard title="User activity">
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="logs"
        :items-length="total"
        :headers="headers"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #item.created_at="{ item }">
         {{ new Date(item.created_at).toDateString() }}
        </template>
        
        <template #bottom>
          <VDivider />
          <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-disabled mb-0">
              {{ paginationMeta({ page, itemsPerPage }, total) }}
            </p>

            <VPagination
              v-model="page"
              :length="Math.ceil(total / itemsPerPage)"
              :total-visible="$vuetify.display.xs ? 1 : Math.ceil(total / itemsPerPage)"
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
</template>
