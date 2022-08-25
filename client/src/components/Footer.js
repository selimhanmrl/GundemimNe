import React from 'react'

const Footer = () => {
  return (
<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a  class="hover:underline">Gündemim Ne?           </a> All Rights Reserved.
    </span>
    <span class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">gundemimne@gmail.com</span>
    <span class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            Eklemek istediğiniz gündemler için mail atınız.
    </span>
</footer>
  )
}

export default Footer