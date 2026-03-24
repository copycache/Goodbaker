<script lang="ts">
import { EllipsisVertical, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationFirst,
  PaginationPrevious,
  PaginationNext,
  PaginationLast,
} from '@/components/ui/pagination'

export default {
  components: {
    Badge,
    Button,
    Label,

    EllipsisVertical,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,

    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,

    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,

    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,

    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationFirst,
    PaginationPrevious,
    PaginationNext,
    PaginationLast,
  },
  data() {
    const products = [
      {
        id: 'PRD001',
        product_name: 'Wireless Mouse',
        sku: 'WM-001',
        category: 'Electronics',
        stock: 120,
        reorder_level: 20,
        unit_price: 25.99,
        cost_price: 15.00,
        supplier: 'LogiTech Supply Co.',
        last_restocked: '2026-03-10',
        status: 'Active',
      },
      {
        id: 'PRD002',
        product_name: 'Mechanical Keyboard',
        sku: 'MK-002',
        category: 'Electronics',
        stock: 45,
        reorder_level: 10,
        unit_price: 89.99,
        cost_price: 60.00,
        supplier: 'KeyTech Ltd.',
        last_restocked: '2026-03-15',
        status: 'Active',
      },
      {
        id: 'PRD003',
        product_name: 'Office Chair',
        sku: 'OC-003',
        category: 'Furniture',
        stock: 10,
        reorder_level: 5,
        unit_price: 150.00,
        cost_price: 100.00,
        supplier: 'Comfort Seating Inc.',
        last_restocked: '2026-02-28',
        status: 'Low Stock',
      },
      {
        id: 'PRD004',
        product_name: 'Notebook Pack',
        sku: 'NB-004',
        category: 'Stationery',
        stock: 0,
        reorder_level: 25,
        unit_price: 12.50,
        cost_price: 6.00,
        supplier: 'PaperGoods Co.',
        last_restocked: '2026-01-20',
        status: 'Out of Stock',
      },
    ]

    return {
      products,
      currentPage: 1,
      itemsPerPage: 10,
    }
  },

  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.products.slice(start, end)
    },

    totalItems() {
      return this.products.length
    }
  },

  mounted() {
    console.log("Mounted");
  }
}
</script>

<template>
  <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div class="aspect-video rounded-xl bg-muted/50" />
      <div class="aspect-video rounded-xl bg-muted/50" />
      <div class="aspect-video rounded-xl bg-muted/50" />
    </div>
    <div class="min-h-[100vh] flex-1 rounded-md border md:min-h-min">
      <Table>
        <!-- <TableCaption>A list of your recent invoices.</TableCaption> -->
        <TableHeader class="bg-muted/50">
          <TableRow>
            <!-- Main identifier (can include image + variant info) -->
            <TableHead>Image</TableHead>

            <!-- Main identifier (can include image + variant info) -->
            <TableHead>Product Name</TableHead>

            <!-- Unique product identifier for tracking -->
            <TableHead>SKU</TableHead>

            <!-- Helps filter and group products -->
            <TableHead>Category</TableHead>

            <!-- Current inventory level -->
            <TableHead>Stock Quantity</TableHead>

            <!-- Minimum threshold before restocking -->
            <TableHead>Reorder Level</TableHead>

            <!-- Selling price per unit -->
            <TableHead>Unit Price</TableHead>

            <!-- Purchase/manufacturing cost -->
            <TableHead>Cost Price</TableHead>

            <!-- Auto-calculated (Price - Cost) -->
            <TableHead>Profit Margin</TableHead>

            <!-- Source/vendor of the product -->
            <TableHead>Supplier</TableHead>

            <!-- Date of last inventory update -->
            <TableHead>Last Restocked</TableHead>

            <!-- Active / Out of Stock / Discontinued -->
            <TableHead>Status</TableHead>

            <!-- Edit, Delete, View, Restock buttons -->
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="product in paginatedProducts" :key="product.id">
            <TableCell>
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <!-- <GalleryVerticalEnd class="size-4" /> -->
              </div>
            </TableCell>
            <TableCell class="font-medium">{{ product.product_name }}</TableCell>
            <TableCell>{{ product.sku }}</TableCell>
            <TableCell>{{ product.category }}</TableCell>
            <TableCell>{{ product.stock }}</TableCell>
            <TableCell>{{ product.reorder_level }}</TableCell>
            <TableCell>${{ product.unit_price }}</TableCell>
            <TableCell>${{ product.cost_price }}</TableCell>
            <TableCell>
              ${{ (product.unit_price - product.cost_price).toFixed(2) }}
            </TableCell>
            <TableCell>{{ product.supplier }}</TableCell>
            <TableCell>{{ product.last_restocked }}</TableCell>
            <TableCell>
              <Badge :variant="product.status === 'Out of Stock'
                ? 'destructive'
                : product.status === 'Low Stock'
                  ? 'warning'
                  : 'success'
                ">
                {{ product.status }}
              </Badge>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="icon">
                    <EllipsisVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Restock</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <div class="flex justify-between">
      <div class="flex items-center gap-2">
        <Label for="itemsPerPage">Rows per page</Label>
        <Select v-model="itemsPerPage">
          <SelectTrigger id="itemsPerPage" class="w-20" tabindex="0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem :value="itemsPerPage">{{ itemsPerPage }}</SelectItem>
            <SelectItem :value="25">25</SelectItem>
            <SelectItem :value="50">50</SelectItem>
            <SelectItem :value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="flex justify-between items-center">
        <Label>
          Page {{ currentPage }} of {{ Math.ceil(totalItems / itemsPerPage) }}
        </Label>
        <div class="flex flex-col gap-5">
          <Pagination :items-per-page="itemsPerPage" :total="totalItems" :page="currentPage"
            @update:page="(p) => currentPage = p">
            <PaginationContent class="flex items-center gap-2">

              <!-- FIRST -->
              <PaginationFirst :disabled="currentPage === 1" @click="currentPage = 1" />

              <!-- PREVIOUS -->
              <PaginationPrevious :disabled="currentPage === 1" @click="currentPage = Math.max(1, currentPage - 1)" />

              <!-- NEXT -->
              <PaginationNext :disabled="currentPage === Math.ceil(totalItems / itemsPerPage)"
                @click="currentPage = Math.min(Math.ceil(totalItems / itemsPerPage), currentPage + 1)" />

              <!-- LAST -->
              <PaginationLast :disabled="currentPage === Math.ceil(totalItems / itemsPerPage)"
                @click="currentPage = Math.ceil(totalItems / itemsPerPage)" />

            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  </div>
</template>