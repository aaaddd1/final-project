<template>
  <div class="container">
      <h2> My to do app</h2>

    <!-- Input-->
      <div>
          <input type="text" placeholder="enter task">
          <button>Sunbmit</button>
      </div>

    <!-- tasktable-->
    <table>
        <thead>
            <tr>
                <th scope="col">Task</th>
                <th scope="col">Status</th>
                <th scope="col">#</th>
                <th scope="col">#</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Steal bananas from the store</td>
                <td>To-do</td>
                <td>
                    <div><span>Edit</span></div>
                </td>
                <td>
                    <div><span>Delete</span></div>
                </td>
            </tr>
        </tbody>
    </table>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>