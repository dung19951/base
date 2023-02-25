<template>
  <header class="dashboard-toolbar">
    <a href="#" class="menu-toggle me-auto" @click="changeSideBar()">
      <i class="bi bi-list"></i>
    </a>
    <div class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img :src="profile?.avatar" class="rounded-circle profile-picture" />
        <span class="d-none d-sm-inline text-dark ms-3">{{
          profile?.full_name ?? profile?.email
        }}</span>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">Cài đặt</a></li>
        <li><a class="dropdown-item" href="#">Thông tin cá nhân</a></li>
        <li>
          <hr class="dropdown-divider" />
        </li>
        <li><a @click="logout" class="dropdown-item">Đăng xuất</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { computed, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
import { authStore } from "../../store/modules/authStore";

const auth = authStore();
const router = useRouter();
const props = defineProps({
  isHideSideBar: Boolean,
});

const { isHideSideBar } = toRefs(props);
const emit = defineEmits(["toggle-sidebar"]);

const profile = computed(() => {
  return authStore().user;
});

function changeSideBar() {
  if (window.matchMedia("max-width: 900px").matches) {
    emit("toggle-sidebar", "mobile-show");
  } else {
    emit("toggle-sidebar", "dashboard-compact");
  }
}

function logout() {
  auth.logout();
}

// watch(isHideSideBar, async (next, current) => {
//   if(next == true && window.matchMedia('(max-width: 900px)').matches){
//
//   }
// })
</script>

<style scoped>
.profile-picture {
  max-width: 35px;
}
</style>
