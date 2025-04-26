<template>
  <!-- Card Section -->
  <div class="w-full py-4 lg:py-8 border-4 border-white/0 hover:border-blue-500 cursor-pointer">
    <!-- Card -->
    <div class="bg-white shadow-xs p-4 sm:p-7 relative w-2/5 mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800">
          Contact
        </h2>
        <p class="text-sm text-gray-600 ">
          Faire une réservation
        </p>
      </div>

      <form>
        <!-- Section -->
        <div class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
          <label for="af-payment-billing-contact" class="inline-block text-sm font-medium ">
            Billing contact
          </label>

          <div class="mt-2 space-y-3">
            <input id="af-payment-billing-contact" type="text"
              class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="First Name">
            <input type="text"
              class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Last Name">
            <input type="text"
              class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Phone Number">
          </div>
        </div>
      </form>

      <div class="mt-5 flex justify-end gap-x-2">
        <button type="button"
          class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          Cancel
        </button>
        <button type="button"
          class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Save changes
        </button>
      </div>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Card Section -->
</template>

<script setup>
import { inject } from 'vue';
const openModal = inject('openModal');
</script>