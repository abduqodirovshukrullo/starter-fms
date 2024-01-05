<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'

import { paginationMeta } from '@api-utils/paginationMeta';
definePage({
  meta: {
    action: 'monitor',
    subject: 'own',
  },
});

const headers = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Value',
    key: 'value'
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  }
]


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


const infos = [
  {
    id:1,
    name: "Battery",
    value: 30
  },
  {
    id:2,
    name: "Speed",
    value: 30
  },
  {
    id:3,
    name: "Lidar",
    value: 30
  }
] 


const totalUsers = computed(() => 30)
</script>
<template>
    <VCard title="Services History">
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="infos"
        :items-length="totalUsers"
        :headers="headers"
        class="text-no-wrap"
        @update:options="updateOptions"
      >

        <template #bottom>
          <VDivider />
          <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-disabled mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalUsers) }}
            </p>

            <VPagination
              v-model="page"
              :length="Math.ceil(totalUsers / itemsPerPage)"
              :total-visible="$vuetify.display.xs ? 1 : Math.ceil(totalUsers / itemsPerPage)"
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
