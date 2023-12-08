<script>
export default {
    props: {
        modelValue: {
            type: String,
        },
        field: {
            type: String,
            required: true,
        },
        label: {
            type: String,

        },
        required: {
            type: Boolean,
        },
        v$: {
            type: Object,
        },
    },
    emits: ['update:modelValue'],
    computed: {
        hasErrorsFn() {
            return this.v$?.registerData[this.field]?.$errors.length;
        },
    },
    methods: {
        onChange(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>

<template>
    <div :class="{ hasError: hasErrorsFn }">
        <label :for="field">{{ label }}</label>
        <slot>
            <input :id="field" :value="modelValue" type="text" @input="onChange">
        </slot>

        <p v-if="hasErrorsFn" class="errMsg">
            <span v-for="err in v$?.registerData[field].$errors" :key="err.$uid">
                {{ `${err.$message}. ` }}
            </span>
        </p>
    </div>
</template>

<style scoped>
.hasError> :deep(input) {
    border-color: red;
}

.hasError> :deep(select) {
    border-color: red;
}

.hasError> :deep(textarea) {
    border-color: red;
}

.hasError .errMsg {
    color: red;

}
</style>
