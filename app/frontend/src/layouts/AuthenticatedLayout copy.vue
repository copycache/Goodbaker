<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

import { Calendar, ChartPie, User, Search, Settings, ChevronsUpDown } from 'lucide-vue-next'
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import ModeToggle from '@/components/ModeToggle.vue'

// Menu items.
const items = [
  { title: 'Dashboard', url: '/admin/dashboard', icon: ChartPie },
  { title: 'User List', url: '#', icon: User },
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
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon" class="w-64" :default-open="true">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <!-- <GalleryVerticalEnd class="size-4" /> -->
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Goodbaker</span>
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
                <template v-if="item.subItems">
                  <Collapsible>
                    <CollapsibleTrigger as-child>
                      <SidebarMenuButton>
                        <component :is="item.icon" />
                        <span>{{ item.title }}</span>
                        <ChevronsUpDown class="ml-auto h-4 w-4" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem v-for="sub in item.subItems" :key="sub.title">
                          <SidebarMenuSubButton as-child>
                            <!-- <a :href="sub.url">
                              {{ sub.title }}
                            </a> -->
                            <router-link :to="sub.url" :class="route.path === sub.url
                              ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold'
                              : ''">
                              {{ sub.title }}
                            </router-link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </template>

                <template v-else>
                  <SidebarMenuButton as-child>
                    <router-link :to="item.url" :class="route.path === item.url
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold'
                      : ''">
                      <component :is="item.icon" />
                      <span>{{ item.title }}</span>
                    </router-link>
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
        <div class="fade-bottom absolute w-full backdrop-blur-lg"></div>
        <div class="max-w-container relative mx-auto"></div>
        <div class="flex items-center gap-2 px-4">
          <ModeToggle />
        </div>
      </header>
      <router-view />
    </SidebarInset>
  </SidebarProvider>
</template>
