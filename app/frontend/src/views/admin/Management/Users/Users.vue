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
        const users = [
            {
                id: 'USR001',
                full_name: 'John Doe',
                email: 'john.doe@example.com',
                role: 'Admin',
                branch: 'New York',
                status: 'Active',
                last_login: '2023-10-01 09:00:00',
                created_at: '2023-01-15 10:30:00',
            },
            {
                id: 'USR002',
                full_name: 'Jane Smith',
                email: 'jane.smith@example.com',
                role: 'User',
                branch: 'Los Angeles',
                status: 'Active',
                last_login: '2023-10-01 11:00:00',
                created_at: '2023-02-20 14:45:00',
            },
        ]

        return {
            users,
            currentPage: 1,
            itemsPerPage: 5,
        }
    },

    computed: {
        paginatedUsers() {
            const start = (this.currentPage - 1) * this.itemsPerPage
            const end = start + this.itemsPerPage
            return this.users.slice(start, end)
        },

        totalItems() {
            return this.users.length
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
                        <TableHead>User ID</TableHead>

                        <!-- Main identifier (can include image + variant info) -->
                        <TableHead>Full Name</TableHead>

                        <!-- Unique product identifier for tracking -->
                        <TableHead>Email</TableHead>

                        <!-- Helps filter and group products -->
                        <TableHead>Role</TableHead>

                        <!-- Current inventory level -->
                        <TableHead>Branch</TableHead>

                        <!-- Minimum threshold before restocking -->
                        <TableHead>Status</TableHead>

                        <!-- Selling price per unit -->
                        <TableHead>Last Login</TableHead>

                        <!-- Purchase/manufacturing cost -->
                        <TableHead>Created At</TableHead>

                        <!-- Auto-calculated (Price - Cost) -->
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="user in paginatedUsers" :key="user.id">
                        <TableCell>
                            <div
                                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <!-- <GalleryVerticalEnd class="size-4" /> -->
                            </div>
                        </TableCell>
                        <TableCell class="font-medium">{{ user.full_name }}</TableCell>
                        <TableCell>{{ user.email }}</TableCell>
                        <TableCell>{{ user.role }}</TableCell>
                        <TableCell>{{ user.branch }}</TableCell>
                        <TableCell>
                            <Badge :variant="user.status === 'Inactive'
                                ? 'destructive'
                                : 'success'
                                ">
                                {{ user.status }}
                            </Badge>
                        </TableCell>
                        <TableCell>{{ user.last_login }}</TableCell>
                        <TableCell>{{ user.created_at }}</TableCell>
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
                        <SelectItem :value="5">5</SelectItem>
                        <SelectItem :value="10">10</SelectItem>
                        <SelectItem :value="20">20</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div class="flex justify-between items-center">
                <Label class="text-sm text-muted-foreground px-2">
                    Page {{ currentPage }} of {{ Math.ceil(totalItems / itemsPerPage) }}
                </Label>
                <div class="flex flex-col gap-6">
                    <Pagination :items-per-page="itemsPerPage" :total="totalItems" :page="currentPage"
                        @update:page="(p) => currentPage = p">
                        <PaginationContent class="flex items-center gap-2">

                            <!-- FIRST -->
                            <PaginationFirst :disabled="currentPage === 1" @click="currentPage = 1" />

                            <!-- PREVIOUS -->
                            <PaginationPrevious :disabled="currentPage === 1"
                                @click="currentPage = Math.max(1, currentPage - 1)" />

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