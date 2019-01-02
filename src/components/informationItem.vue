<template>
  <ul class="nav">
    <li class="nav-item mr-3">
      <a class="nav-link p-0" href="#"><img src="../assets/fill-1.png" alt="">
        <p class="pr-3 ml-2 mb-0">sevenhillsltd@gmail.com</p>
      </a>
    </li>
    <li class="nav-item mr-3">
      <a class="nav-link p-0" href="#"><img src="../assets/phoneIcon.svg" alt="">
        <p class="pr-3 ml-2 mb-0">+84 875 789 287</p>
      </a>
    </li>
    <li class="nav-item mr-3">
      <a class="nav-link p-0" href="#"><img src="../assets/clockicon.svg" alt="">
        <p class="last pr-3 ml-2 mb-0">9 AM - 6 PM</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'informationItem'
}
</script>

<style scoped lang="scss">
  ul {
    li {
      p {
        display: inline-block;
        color: white;
        border-right: 1px solid rgba(255, 255, 255, 0.5);
      }
      @media (max-width: 767px) {
        .nav-link {
          padding: .5rem;
        }
        p {
          display: none;
        }
      }
      .last {
        border-right: none;
      }
    }
  }

</style>
