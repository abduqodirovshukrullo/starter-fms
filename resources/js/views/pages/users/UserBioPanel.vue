<script setup>
const router = useRouter();
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

const deleteUser = async id => {
  await $api(`/dashboard/admin/user/${ id }`, { method: 'DELETE' })

  // refetch User
  router.push('/users/list')
}

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard v-if="userData">
        <VCardText class="text-center pt-15">
          <VAvatar
            rounded
            :size="100"
            color="primary"
            variant="tonal"
          >
            <VIcon
              icon="tabler-user-pentagon"
              size="28"
            />
          </VAvatar>
          <h6 class="text-h4 mt-4">
            {{ props.userData.name }}
          </h6>
          <VChip
            label
            color="info"
            size="small"
            class="text-capitalize mt-3"
          >
            {{ 'supervisor' }}
          </VChip>
        </VCardText>

        <VDivider />

        <VCardText>
          <p class="text-sm text-uppercase text-disabled">
            Details
          </p>

          <VList class="card-list mt-2">
            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Name:
                  <span class="text-body-1">
                    {{ props.userData.name }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Email:
                  <span class="text-body-1">
                    {{ props.userData.email }}
                  </span>
                </h6>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <h6 class="text-h6">
                  Status:

                  <VChip
                    label
                    size="small"
                    color="success"
                    class="text-capitalize"
                  >
                    {{ "Active" }}
                  </VChip>
                </h6>
              </VListItemTitle>
            </VListItem>

          </VList>
        </VCardText>

        <VCardText class="d-flex justify-end">

          <VBtn
            @click="deleteUser(props.userData.id)"
            variant="tonal"
            color="error"
          >
            Suspend
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
