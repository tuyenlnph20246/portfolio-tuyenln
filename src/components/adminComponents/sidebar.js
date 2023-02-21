const sidebar = () => {
  return `
  <div class="flex-none w-1/6 border-r">
      <div class="flex items-center flex-col gap-2 justify-center py-2 h-[200px]">
          <div class="">
            <img class="rounded-full w-16" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
          </div>
          <div class="">
            <h3 class="font-semibold text-xl">Luu Ngoc Tuyen</h3>
            <div class="flex items-center justify-center gap-3 text-[#7B8FA1]">
              <p>Admin Page</p>
              <i class="fas fa-arrow-circle-down"></i>
            </div>
          </div>
      </div>
      <div class="flex flex-col gap-y-6">
        <a href="/admin/navs" class="">
          <div class="grid grid-cols-2 py-2 hover:bg-[#F99417] hover:text-white">
            <div class="text-center"><i class="fas fa-caret-down text-xl text-[#DC3535] "></i></div>
            <div class="font-medium text-lg">Menu main</div>
          </div>
        </a>
        <a href="/admin/account" class="">
          <div class="grid grid-cols-2 py-2 hover:bg-[#F99417] hover:text-white">
            <div class="text-center"><i class="fas fa-user text-xl text-[#DC3535] "></i></i></div>
            <div class="font-medium text-lg">Account</div>
          </div>
        </a>
        <a href="/admin/socialmedias" class="">
          <div class="grid grid-cols-2 py-2 hover:bg-[#F99417] hover:text-white">
            <div class="text-center"><i class="fas fa-compact-disc text-xl text-[#DC3535]"></i></div>
            <div class="font-medium text-lg">Social Media</div>
          </div>
        </a>
        <a href="/admin/testmonial" class="">
          <div class="grid grid-cols-2 py-2 hover:bg-[#F99417] hover:text-white">
            <div class="text-center"><i class="fas fa-file-alt text-xl text-[#DC3535]"></i></div>
            <div class="font-medium text-lg">Testmonial</div>
          </div>
        </a>
        <a href="/admin/portfolio" class="">
          <div class="grid grid-cols-2 py-2 hover:bg-[#F99417] hover:text-white">
            <div class="text-center"><i class="fa-solid fa-file text-xl text-[#DC3535]"></i></div>
            <div class="font-medium text-lg">Portfolio</div>
          </div>
        </a>
        <a href="/admin/contact" class="">
          <div class="grid grid-cols-2 py-2 hover:bg-[#F99417] hover:text-white">
            <div class="text-center"><i class="fas fa-phone-alt text-xl text-[#DC3535]"></i></div>
            <div class="font-medium text-lg">Contact</div>
          </div>
        </a>
      </div>
    </div>
    `;
};

export default sidebar;
