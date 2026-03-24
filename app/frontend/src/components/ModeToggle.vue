<script setup lang="ts">
// import { Icon } from '@iconify/vue'
import { Moon, Sun, Check } from 'lucide-vue-next'
import { useColorMode } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const mode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button data-sidebar="trigger" variant="ghost" size="icon">
        <Moon class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Sun class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'" class="flex items-center gap-2">
        <span class="w-4 flex items-center justify-center">
          <Check v-if="mode === 'light'" class="w-4 h-4" />
        </span>
        <span>Light</span>
      </DropdownMenuItem>

      <DropdownMenuItem @click="mode = 'dark'" class="flex items-center gap-2">
        <span class="w-4 flex items-center justify-center">
          <Check v-if="mode === 'dark'" class="w-4 h-4" />
        </span>
        <span>Dark</span>
      </DropdownMenuItem>

      <DropdownMenuItem @click="mode = 'auto'" class="flex items-center gap-2">
        <span class="w-4 flex items-center justify-center">
          <Check v-if="mode === 'auto'" class="w-4 h-4" />
        </span>
        <span>System</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
