<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Home, Inbox, Search, Settings, ChevronsUpDown } from 'lucide-vue-next'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

// Menu items.
const items = [
  { title: 'Dashboard', url: '#', icon: Home },
  { title: 'User List', url: '#', icon: Inbox },
  { title: 'Branches', url: '#', icon: Calendar },
  { title: 'Sales', url: '#', icon: Search },
  { title: 'Delivery', url: '#', icon: Settings },
  {
    title: 'Inventory',
    url: '#',
    icon: Settings,
    subItems: [
      { title: 'Products', url: '#', icon: Settings },
      { title: 'Premixes', url: '#', icon: Settings },
      { title: 'Raw Materials', url: '#', icon: Settings },
      { title: 'Transfer Items', url: '#', icon: Settings },
    ],
  },
]

const isOpen = ref(false)
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon" class="w-64" :default-open="true">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <!-- <GalleryVerticalEnd class="size-4" /> -->
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Company Inc</span>
                <span class="truncate text-xs">Enterprise</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MAIN MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in items" :key="item.title">
                <!-- Check if item has subItems -->
                <template v-if="item.subItems">
                  <Collapsible v-model:open="isOpen" class="flex-col gap-2">
                    <SidebarMenuButton as-child>
                      <CollapsibleTrigger as-child>
                        <SidebarMenuButton>
                          <component :is="item.icon" />
                          <span>{{ item.title }}</span>
                          <ChevronsUpDown class="ml-auto h-4 w-4" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    </SidebarMenuButton>

                    <CollapsibleContent class="flex flex-col">
                      <SidebarMenuItem v-for="sub in item.subItems" :key="sub.title">
                        <SidebarMenuButton as-child>
                          <a :href="sub.url" class="flex gap-2 items-center px-4 py-2">
                            <!-- <component :is="sub.icon" /> -->
                            <span>{{ sub.title }}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </CollapsibleContent>
                  </Collapsible>
                </template>
                <template v-else>
                  <SidebarMenuButton as-child>
                    <a :href="item.url">
                      <component :is="item.icon" />
                      <span>{{ item.title }}</span>
                    </a>
                  </SidebarMenuButton>
                </template>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
        </div>
      </header>
      <router-view />
    </SidebarInset>
  </SidebarProvider>
</template>
