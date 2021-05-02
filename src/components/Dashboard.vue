<template>
  <transition name="fade" mode="in-out">
    <div v-show="!splash" class="startup-flexbox">
      <Avatar class="avatar" />
      <!-- <div class="img-wrap abs">
        <img src="@/assets/images/start_img1-2@2x.png" alt="MEGA" class="img" />
      </div> -->
      <div class="mi-header z-1">
        <img class="mi-logo-frame" src="@/assets/icons/logo.png" alt="FFmpeg" />
        <strong class="mi-logo-title">Mpeg Info;</strong>
      </div>
      <div class="bio z-1">
        Program to handle video, audio, and other multimedia files and streams.
        <br />
      </div>
      <div class="info z-1">
        Drop your files below ~ <strong>100 MB </strong>file size
      </div>
      <Dropzone />
      <Button />
    </div>
  </transition>
</template>

<script>
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import Dropzone from "@/components/Dropzone";
export default {
  name: "Dashboard",
  components: { Dropzone, Button, Avatar },
  data() {
    return {
      splash: true,
    };
  },
  mounted() {
    this.splash = false;
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.flex-1 {
  flex: 1;
}

.startup-flexbox {
  position: absolute;
  padding-bottom: 20px;
  background-color: #f7f9fb;
  margin: 0px 10%;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  // --
  .mi-header {
    text-align: left !important;
    display: flex;
    align-items: center;
    padding-top: 10px;
    // --
    .mi-logo-frame {
      height: 100px;
      position: relative;
      width: 100px;
    }
    .mi-logo-title {
      font-weight: normal;
      color: rgb(55, 55, 55);
      font-size: 40px;
    }
  }
  .bio {
    font-size: 40px;
    line-height: 63px;
    color: #373737;
    padding: 30px 0px;
  }
  .info {
    font-size: 16px;
    line-height: 18px;
    color: #373737;
    padding-bottom: 20px;
  }
  .img-wrap {
    // display: flex;
    position: relative;
    justify-content: center;
    line-height: 0;
    flex: 1;
    bottom: 0;
    // --
    .img {
      height: auto;
      width: 100%;
      // position: absolute;
    }
  }
}
</style>
