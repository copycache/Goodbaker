<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
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
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import ModeToggle from '@/components/ModeToggle.vue'

// Menu items.
const items = [
  { title: 'Dashboard', url: '/dashboard', icon: ChartPie },

  { group: 'Sales', title: 'Sales Orders', url: '/admin/sales/orders', icon: Search },
  { group: 'Sales', title: 'Delivery', url: '/admin/sales/delivery', icon: Settings },
  { group: 'Sales', title: 'Invoices / Payments', url: '/admin/sales/invoices', icon: Settings },
  { group: 'Sales', title: 'Returns / Refunds', url: '/admin/sales/returns', icon: Settings },
  { group: 'Sales', title: 'Discounts / Promotions', url: '/admin/sales/discounts', icon: Settings },

  { group: 'Inventory', title: 'Products', url: '/products', icon: Settings },
  { group: 'Inventory', title: 'Raw Materials', url: '/admin/inventory/raw-materials', icon: Settings },
  { group: 'Inventory', title: 'Premixes', url: '/admin/inventory/premixes', icon: Settings },
  { group: 'Inventory', title: 'Supplies', url: '/admin/inventory/supplies', icon: Settings },
  { group: 'Inventory', title: 'Transfers', url: '/admin/inventory/transfers', icon: Settings },
  { group: 'Inventory', title: 'Stock Adjustments', url: '/admin/inventory/stock-adjustments', icon: Settings },
  { group: 'Inventory', title: 'Reorder Alerts / Minimum Stock Levels', url: '/admin/inventory/reorder-alerts', icon: Settings },
  { group: 'Inventory', title: 'Inventory Valuation / Cost Tracking', url: '/admin/inventory/inventory-valuation', icon: Settings },

  { group: 'Purchases', title: 'Create Purchase', url: '/admin/purchases/create', icon: Calendar },
  { group: 'Purchases', title: 'View Purchases', url: '/admin/purchases/view', icon: Calendar },
  { group: 'Purchases', title: 'Supplier Management', url: '/admin/purchases/suppliers', icon: Calendar },
  { group: 'Purchases', title: 'Purchase Returns', url: '/admin/purchases/returns', icon: Calendar },
  { group: 'Purchases', title: 'Purchase Approval Workflow', url: '/admin/purchases/approval', icon: Calendar },

  { group: 'Clients', title: 'Clients', url: '/admin/clients', icon: User },
  { group: 'Clients', title: 'Client Categories', url: '/admin/clients/categories', icon: User },
  { group: 'Clients', title: 'Pricing', url: '/admin/clients/pricing', icon: User },
  { group: 'Clients', title: 'Credit Limits / Outstanding Balances', url: '/admin/clients/credit-limits', icon: User },
  { group: 'Clients', title: 'Activity Logs / Interaction History', url: '/admin/clients/activity-logs', icon: User },

  { group: 'Management', title: 'Users', url: '/admin/management/users', icon: User },
  { group: 'Management', title: 'Branches', url: '/admin/management/branches', icon: Calendar },
  { group: 'Management', title: 'Roles & Permissions', url: '/admin/management/roles', icon: Calendar },
  { group: 'Management', title: 'Audit Logs', url: '/admin/management/audit-logs', icon: Calendar },

  { group: 'Reports', title: 'Sales Reports', url: '/admin/reports/sales', icon: ChartPie },
  { group: 'Reports', title: 'Inventory Reports', url: '/admin/reports/inventory', icon: ChartPie },
  { group: 'Reports', title: 'Profit & Loss Reports', url: '/admin/reports/profit-loss', icon: ChartPie },
  { group: 'Reports', title: 'Trend Analysis', url: '/admin/reports/trend-analysis', icon: ChartPie },
  { group: 'Reports', title: 'Custom Reports', url: '/admin/reports/custom', icon: ChartPie },

  { group: 'Others', title: 'Settings', url: '/admin/settings', icon: Settings },
  { group: 'Others', title: 'Backup / Restore', url: '/admin/settings', icon: Settings },
  { group: 'Others', title: 'Integration Settings', url: '/admin/settings', icon: Settings },
]

const breadcrumbItems = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  const breadcrumbs: { title: string; url: string }[] = []

  let fullPath = ''

  pathSegments.forEach((segment) => {
    fullPath += '/' + segment

    const match = items.find((item) => item.url === fullPath)

    if (match) {
      if (match.group && !breadcrumbs.find(b => b.title === match.group)) {
        breadcrumbs.push({
          title: match.group,
          url: '/dashboard',
        })
      }

      breadcrumbs.push({
        title: match.title,
        url: match.url,
      })
    }
  })

  if (breadcrumbs.length === 0 && route.path === '/dashboard') {
    breadcrumbs.push({ title: 'Dashboard', url: '/dashboard' })
  }

  return breadcrumbs
})
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
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <template v-for="(item, index) in items" :key="index">
              <SidebarGroupLabel v-if="item.group && (index === 0 || item.group !== items[index - 1]?.group)">
                {{ item.group }}
              </SidebarGroupLabel>

              <SidebarMenuItem>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger as-child>
                      <SidebarMenuButton as-child>
                        <router-link :to="item.url" :class="route.path === item.url
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold'
                          : ''" class="flex items-center gap-2">
                          <component :is="item.icon" />
                          <span class="truncate">{{ item.title }}</span>
                        </router-link>
                      </SidebarMenuButton>
                    </TooltipTrigger>

                    <TooltipContent side="right">
                      {{ item.title }}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </SidebarMenuItem>
            </template>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>

    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Breadcrumb>
            <BreadcrumbList>
              <template v-for="(item, index) in breadcrumbItems" :key="index">
                <BreadcrumbItem>
                  <BreadcrumbLink :href="item.url">
                    {{ item.title }}
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator v-if="index < breadcrumbItems.length - 1">
                  /
                </BreadcrumbSeparator>
              </template>
            </BreadcrumbList>
          </Breadcrumb>
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
