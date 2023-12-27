<template>
<VRow>
  <VCol cols="12">
    <VCard :title="props.tableData.title">
      <VCardText class="d-flex flex-wrap justify-end">
        <slot name="pageActions"></slot>
      </VCardText>
      <VDivider />
      <VCardText class="d-flex flex-wrap py-4 gap-4">
        Filter
      </VCardText>
      <VDivider />
      <VTable class="text-no-wrap">
        <!-- 👉 table head -->
        <thead>

          <tr>
            <th v-for="header in props.tableData.headers" scope="col">
              {{ header.toUpperCase() }}
            </th>
          </tr>

        </thead>
        <!-- 👉 table body -->

        <tbody v-if="!loading">
            <tr v-for="item in props.body.data">
                <td v-for="key in props.tableData.headers">
                  <slot :name="key" :item="item">
                    <template v-if="item[key]">
                      <p>
                        {{ item[key] }}
                      </p>

                    </template>
                    <template v-else>
                      ....
                    </template>
                  </slot>
                </td>
            </tr>
        </tbody>

        <tbody v-else>
          <tr>
            <td :colspan="props.tableData.headers.length">
              <VProgressLinear
                indeterminate
                color="info"
              />
            </td>
          </tr>

        </tbody>
        <!-- 👉 table footer  -->
        <tfoot v-show="Array.isArray(props.body.data)&!props.body.data">
        <tr>
          <td
            colspan="7"
            class="text-center"
          >
            No data available
          </td>
        </tr>
        </tfoot>
      </VTable>
      <VDivider />
      <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
        <span class="text-sm text-disabled">
          {{ paginationData }}
        </span>
        <VPagination
          v-model="props.body.pagination.meta.current_page"
          @update:model-value="paged"
          size="small"
          :total-visible="5"
          :length="props.body.pagination.meta.last_page"
        />
      </VCardText>
    </VCard>
  </VCol>
</VRow>
</template>
<script setup>
const pagination = reactive({
  currentPage:1,
  rowPerPage: 10
})
const emit = defineEmits([
  'pageChanged'
])

const props = defineProps({
  loading:{
    type: Boolean
  },
  body:{
    type: Object,
    default:{
    }
  },
  tableData:{
    type: Object,
    default:{
      title: 'Table'
    }
  }
})

const paged = ()=>{
  emit('pageChanged')
}

const paginationData = computed(() => {
  return `Showing ${ props.body.pagination.meta.from } to ${  props.body.pagination.meta.to } of ${  props.body.pagination.meta.total }  entries`
})
</script>
