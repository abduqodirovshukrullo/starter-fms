<script setup>
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import AddNewUserDrawer from '@/views/pages/users/AddNewUserDrawer.vue';
import { paginationMeta } from '@api-utils/paginationMeta';
definePage({
  meta: {
    action: 'manage',
    subject: 'permission',
  },
});



const isAddNewUserDrawerVisible = ref(false)

const addNewUser = async userData => {
  await $api('/dashboard/admin/user', {
    method: 'POST',
    body: userData,
  })

  // refetch User
  fetchUsers()
}

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
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  }
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
}


const {
  data: usersData,
  execute: fetchUsers,
} = await useApi(createUrl('/dashboard/admin/user', {
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
}))



const users = computed(() => usersData.value.result.data)
const totalUsers = computed(() => usersData.value.result.total)
</script>
<template>
  <section>
    <VCard>
      <VCardText class="d-flex flex-wrap py-4 gap-4">
        <div class="me-3 d-flex gap-3">
          <AppSelect
            :model-value="itemsPerPage"
            :items="[
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: '100' },
              { value: -1, title: 'All' },
            ]"
            style="inline-size: 6.25rem;"
            @update:model-value="itemsPerPage = parseInt($event, 10)"
          />
        </div>
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Add user button -->
          <VBtn
            prepend-icon="tabler-plus"
            @click="isAddNewUserDrawerVisible = true"
          >
            Add New User
          </VBtn>
        </div>
      </VCardText>
      <VDivider/>
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="users"
        :items-length="totalUsers"
        :headers="headers"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #item.created_at="{ item }">
         {{ new Date(item.created_at).toDateString() }}
        </template>
        <template #item.actions="{ item }">
          <!-- <IconBtn @click="deleteUser(item.id)">
            <VIcon icon="tabler-trash" />
          </IconBtn> -->

          <IconBtn :to="{ name: 'users-id', params: { id: item.id } }">
            <VIcon icon="tabler-eye" />
          </IconBtn>

          <!-- <VBtn
            icon
            variant="text"
            size="small"
            color="medium-emphasis"
          >
            <VIcon
              size="24"
              icon="tabler-dots-vertical"
            />
            <VMenu activator="parent">
              <VList>
                <VListItem  :to="{ name: 'users-id', params: { id: item.id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>

                  <VListItemTitle>View</VListItemTitle>
                </VListItem>
                <VListItem @click="deleteUser(item.id)">
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>Delete</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn> -->
        </template>
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
        <!-- 👉 Add New User -->
    <AddNewUserDrawer
      v-model:isDrawerOpen="isAddNewUserDrawerVisible"
      @user-data="addNewUser"
    />
  </section>
</template>
