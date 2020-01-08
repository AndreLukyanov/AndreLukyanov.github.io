<template>
	<select>
    <slot></slot>
  </select>
</template>


<script>
import $ from "jquery";

export default {
  props: ["options", "value"],

  mounted: function() {
    var vm = this;
    $(this.$el)
      .select2({ data: this.options })
      .val(this.value)
      .trigger("change")
      .on("select2-open", function() {
        vm.$el.data();
        vm.$el.position({
          my: "right center",
          at: "right center",
          of: "$el.offsetParent",

        });
      })
      .on("change", function() {
        vm.$emit("input", this.value);
      });
  },

  watch: {
    value: function(value) {
      $(this.$el)
        .val(value)
        .trigger("change");
    },
    options: function(options) {
      $(this.$el)
        .empty()
        .select2({ data: options });
    }
  },

  destroyed: function() {
    $(this.$el)
      .off()
      .select2("destroy");
  }
};
</script>
