
import content from "@/components/adminComponents/content"
import sidebar from "@/components/adminComponents/sidebar"
const NavAdminPage = () => {
  return (
    `
    <div class="container mx-auto w4/5 flex border">
      ${sidebar()}
      ${content()}
    </div>
    `
  )
}

export default NavAdminPage