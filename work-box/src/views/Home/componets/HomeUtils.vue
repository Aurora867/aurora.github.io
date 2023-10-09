<script setup>

</script>
<template>

  <el-row style="background-color: #f4f8fb;padding: 20px">
    <el-col :span="5" class="option">
      <img src="@/assets/img/time.png" alt="图片" style="height: 100px;width: 120px;margin-bottom: 10px">
      <br>
      <el-text class="mx-1" type="primary" size="large">UNIX时间戳转化为北京时间</el-text>
      <div class="button">
        <router-link to="/timeStampChange">
          <el-button type="info" size="small">进入</el-button>
        </router-link>
      </div>
    </el-col>

    <el-col :span="5" class="option">
      <img src="@/assets/img/json.png" alt="图片" style="height: 100px;width: 200px;margin-bottom: 10px">
      <br>
      <el-text class="mx-1" type="primary" size="large">JSON格式美化</el-text>
      <div class="button">
        <router-link to="/jsonFormat">
          <el-button type="info" size="small">进入</el-button>
        </router-link>
      </div>
    </el-col>

    <el-col :span="5 " class="option">
    </el-col>
    <el-col :span="5" class="option">

    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
  height: 100px;
}

.option {
  height: 200px;
  background-color: #f4f4f4;
  padding: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 25px;
  border-radius: 20px;
}

.el-button {
  margin-top: 10px;
}
</style>