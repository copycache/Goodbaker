<script lang="ts">
import {
    EllipsisVertical,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    ChevronsUpDown,
    Search,
    Plus,
} from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
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
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

export default {
    components: {
        Badge,
        Button,
        Label,
        Input,
        Search,
        Plus,
        ChevronsUpDown,

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

        Sheet,
        SheetContent,
        SheetDescription,
        SheetHeader,
        SheetTitle,
        SheetTrigger,

        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    },
    data() {
        const users = [
            {
                id: 'USR011',
                full_name: 'Ethan Clark',
                email: 'ethan.clark@example.com',
                role: 'User',
                branch: 'Austin',
                status: 'Active',
                last_login: '2023-10-07 08:30:00',
                created_at: '2023-09-20 10:00:00',
            },
            {
                id: 'USR012',
                full_name: 'Mia Rodriguez',
                email: 'mia.rodriguez@example.com',
                role: 'Manager',
                branch: 'Jacksonville',
                status: 'Active',
                last_login: '2023-10-07 12:15:00',
                created_at: '2023-09-22 11:45:00',
            },
            {
                id: 'USR013',
                full_name: 'Noah Lewis',
                email: 'noah.lewis@example.com',
                role: 'User',
                branch: 'Fort Worth',
                status: 'Inactive',
                last_login: '2023-09-29 09:10:00',
                created_at: '2023-09-25 14:30:00',
            },
            {
                id: 'USR014',
                full_name: 'Isabella Walker',
                email: 'isabella.walker@example.com',
                role: 'Admin',
                branch: 'Columbus',
                status: 'Active',
                last_login: '2023-10-08 10:20:00',
                created_at: '2023-09-27 13:00:00',
            },
            {
                id: 'USR015',
                full_name: 'Liam Hall',
                email: 'liam.hall@example.com',
                role: 'User',
                branch: 'Charlotte',
                status: 'Suspended',
                last_login: '2023-09-26 15:45:00',
                created_at: '2023-09-28 09:15:00',
            },
            {
                id: 'USR016',
                full_name: 'Amelia Allen',
                email: 'amelia.allen@example.com',
                role: 'Manager',
                branch: 'San Francisco',
                status: 'Active',
                last_login: '2023-10-09 11:05:00',
                created_at: '2023-10-01 10:25:00',
            },
            {
                id: 'USR017',
                full_name: 'Benjamin Young',
                email: 'benjamin.young@example.com',
                role: 'User',
                branch: 'Indianapolis',
                status: 'Active',
                last_login: '2023-10-09 13:40:00',
                created_at: '2023-10-02 14:10:00',
            },
            {
                id: 'USR018',
                full_name: 'Charlotte Hernandez',
                email: 'charlotte.hernandez@example.com',
                role: 'User',
                branch: 'Seattle',
                status: 'Inactive',
                last_login: '2023-09-27 08:55:00',
                created_at: '2023-10-03 16:20:00',
            },
            {
                id: 'USR019',
                full_name: 'Lucas King',
                email: 'lucas.king@example.com',
                role: 'Admin',
                branch: 'Denver',
                status: 'Active',
                last_login: '2023-10-10 09:35:00',
                created_at: '2023-10-04 11:50:00',
            },
            {
                id: 'USR020',
                full_name: 'Harper Wright',
                email: 'harper.wright@example.com',
                role: 'User',
                branch: 'Washington',
                status: 'Active',
                last_login: '2023-10-10 15:25:00',
                created_at: '2023-10-05 13:30:00',
            },
            {
                id: 'USR021',
                full_name: 'Elijah Scott',
                email: 'elijah.scott@example.com',
                role: 'User',
                branch: 'Boston',
                status: 'Inactive',
                last_login: '2023-09-30 10:10:00',
                created_at: '2023-10-06 09:40:00',
            },
            {
                id: 'USR022',
                full_name: 'Evelyn Green',
                email: 'evelyn.green@example.com',
                role: 'Manager',
                branch: 'El Paso',
                status: 'Active',
                last_login: '2023-10-11 08:20:00',
                created_at: '2023-10-07 10:55:00',
            },
            {
                id: 'USR023',
                full_name: 'Alexander Adams',
                email: 'alexander.adams@example.com',
                role: 'User',
                branch: 'Nashville',
                status: 'Suspended',
                last_login: '2023-09-24 16:00:00',
                created_at: '2023-10-08 14:15:00',
            },
            {
                id: 'USR024',
                full_name: 'Abigail Baker',
                email: 'abigail.baker@example.com',
                role: 'User',
                branch: 'Detroit',
                status: 'Active',
                last_login: '2023-10-11 17:10:00',
                created_at: '2023-10-09 12:45:00',
            },
            {
                id: 'USR025',
                full_name: 'Henry Nelson',
                email: 'henry.nelson@example.com',
                role: 'Admin',
                branch: 'Memphis',
                status: 'Active',
                last_login: '2023-10-12 09:50:00',
                created_at: '2023-10-10 11:35:00',
            }
        ];

        return {
            users,
            currentPage: 1,
            itemsPerPage: 10,
            search: '',
            selectedUser: null as any,
        }
    },

    computed: {
        searchUsers() {
            if (!this.search) return this.users

            const result = this.search.toLowerCase()

            return this.users.filter(user =>
                user.full_name.toLowerCase().includes(result) ||
                user.email.toLowerCase().includes(result) ||
                user.role.toLowerCase().includes(result) ||
                user.branch.toLowerCase().includes(result) ||
                user.status.toLowerCase().includes(result)
            )
        },
        paginatedUsers() {
            const start = (this.currentPage - 1) * this.itemsPerPage
            const end = start + this.itemsPerPage
            return this.searchUsers.slice(start, end)
        },

        totalItems() {
            return this.searchUsers.length
        },

        totalUsers() {
            return this.users.length
        },
        activeUsers() {
            return this.users.filter(u => u.status === 'Active').length
        },
        inactiveUsers() {
            return this.users.filter(u => u.status === 'Inactive').length
        },
        suspendedUsers() {
            return this.users.filter(u => u.status === 'Suspended').length
        }
    },

    mounted() {
        console.log("Mounted");
    }
}
</script>

<template>
    <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <!-- KPI Card dito -->
        <div class="grid gap-4 md:grid-cols-4">
            <!-- TOTAL USERS -->
            <Card class="rounded-2xl">
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardDescription><Label>Total Users</Label></CardDescription>
                    <Badge variant="outline">+12.5%</Badge>
                    <!-- <span class="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-md">
                        +12.5%
                    </span> -->
                </CardHeader>

                <CardContent>
                    <CardTitle class="text-3xl font-bold">{{ totalUsers }}</CardTitle>
                    <Label class="mt-4">Growing user base</Label>
                    <CardDescription>Compared to last month</CardDescription>
                </CardContent>
            </Card>

            <!-- ACTIVE USERS -->
            <Card class="rounded-2xl">
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardDescription><Label>Active Users</Label></CardDescription>
                    <Badge variant="success">+8.2%</Badge>
                </CardHeader>

                <CardContent>
                    <CardTitle class="text-3xl font-bold">{{ activeUsers }}</CardTitle>
                    <Label class="mt-4">Strong engagement</Label>
                    <CardDescription>Users active this period</CardDescription>
                </CardContent>
            </Card>

            <!-- INACTIVE USERS -->
            <Card class="rounded-2xl">
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardDescription><Label>Inactive Users</Label></CardDescription>
                    <Badge variant="destructive">-5.3%</Badge>
                </CardHeader>

                <CardContent>
                    <CardTitle class="text-3xl font-bold">{{ inactiveUsers }}</CardTitle>
                    <Label class="mt-4">Needs attention</Label>
                    <CardDescription>No recent activity</CardDescription>
                </CardContent>
            </Card>

            <!-- SUSPENDED USERS -->
            <Card class="rounded-2xl">
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardDescription><Label>Suspended Users</Label></CardDescription>
                    <Badge variant="warning">+1.1%</Badge>
                </CardHeader>

                <CardContent>
                    <CardTitle class="text-3xl font-bold">{{ suspendedUsers }}</CardTitle>
                    <Label class="mt-4">Policy enforcement</Label>
                    <CardDescription>Restricted accounts</CardDescription>
                </CardContent>
            </Card>
        </div>
        <div class="aspect-video rounded-xl bg-muted/50" />
        <div class="flex justify-between">
            <div class="flex w-full max-w-sm items-center space-x-2">
                <div class="relative">
                    <div
                        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
                        <Search class="size-4" />
                    </div>
                    <Input v-model="search" type="text" placeholder="Search users..." class="pl-9" />
                </div>
            </div>
            <div class="flex max-w-sm items-center space-x-2">
                <Button variant="outline" size="sm">
                    Import
                </Button>
                <Button variant="default" size="sm">
                    <Plus class="size-4" />
                    Add User
                </Button>
            </div>
        </div>
        <div class="min-h-[100vh] flex-1 rounded-md border md:min-h-min">
            <Sheet>
                <Table>
                    <!-- <TableCaption>A list of your recent invoices.</TableCaption> -->
                    <TableHeader class="bg-muted/50">
                        <TableRow>
                            <!-- Main identifier (can include image + variant info) -->
                            <TableHead>
                                <DropdownMenu>
                                    <DropdownMenuTrigger class="flex items-center gap-1">
                                        User ID
                                        <ChevronsUpDown class="size-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Asc</DropdownMenuItem>
                                        <DropdownMenuItem>Desc</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableHead>

                            <!-- Main identifier (can include image + variant info) -->
                            <TableHead>
                                <DropdownMenu>
                                    <DropdownMenuTrigger class="flex items-center gap-1">
                                        Fullname
                                        <ChevronsUpDown class="size-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Asc</DropdownMenuItem>
                                        <DropdownMenuItem>Desc</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableHead>

                            <!-- Unique product identifier for tracking -->
                            <TableHead>Email</TableHead>

                            <!-- Helps filter and group products -->
                            <TableHead>
                                <DropdownMenu>
                                    <DropdownMenuTrigger class="flex items-center gap-1">
                                        Role
                                        <ChevronsUpDown class="size-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Asc</DropdownMenuItem>
                                        <DropdownMenuItem>Desc</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableHead>

                            <!-- Current inventory level -->
                            <TableHead>
                                <DropdownMenu>
                                    <DropdownMenuTrigger class="flex items-center gap-1">
                                        Branch
                                        <ChevronsUpDown class="size-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Asc</DropdownMenuItem>
                                        <DropdownMenuItem>Desc</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableHead>

                            <!-- Minimum threshold before restocking -->
                            <TableHead>
                                <DropdownMenu>
                                    <DropdownMenuTrigger class="flex items-center gap-1">
                                        Status
                                        <ChevronsUpDown class="size-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Asc</DropdownMenuItem>
                                        <DropdownMenuItem>Desc</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableHead>

                            <!-- Selling price per unit -->
                            <TableHead>Last Login</TableHead>

                            <!-- Purchase/manufacturing cost -->
                            <TableHead>Created At</TableHead>

                            <!-- Auto-calculated (Price - Cost) -->
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="user in paginatedUsers" :key="user.id">
                            <TableCell class="font-medium">{{ user.id }}</TableCell>
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
                                        <DropdownMenuItem @click="selectedUser = user">
                                            <SheetTrigger class="w-full text-left">Edit</SheetTrigger>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>Restock</DropdownMenuItem>
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <SheetContent v-if="selectedUser">
                    <SheetHeader>
                        <SheetTitle>Edit User</SheetTitle>
                        <SheetDescription>
                            Make changes to the user's information.
                        </SheetDescription>
                    </SheetHeader>

                    <div class="grid gap-4 py-4">
                        <div>
                            <Label>Full Name</Label>
                            <Input v-model="selectedUser.full_name" />
                        </div>

                        <div>
                            <Label>Email</Label>
                            <Input v-model="selectedUser.email" />
                        </div>

                        <div>
                            <Label>Role</Label>
                            <Input v-model="selectedUser.role" />
                        </div>

                        <div>
                            <Label>Branch</Label>
                            <Input v-model="selectedUser.branch" />
                        </div>

                        <div>
                            <Label>Status</Label>
                            <Select v-model="selectedUser.status">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Active">Active</SelectItem>
                                    <SelectItem value="Inactive">Inactive</SelectItem>
                                    <SelectItem value="Suspended">Suspended</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button class="mt-4">Save Changes</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
        <div class="flex justify-between">
            <div class="flex items-center gap-2">
                <Label for="itemsPerPage">Rows per page</Label>
                <Select :model-value="itemsPerPage"
                    @update:model-value="val => { itemsPerPage = Number(val); currentPage = 1 }">
                    <SelectTrigger id="itemsPerPage" class="w-20" tabindex="0">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <!-- <SelectItem :value="itemsPerPage">{{ itemsPerPage }}</SelectItem> -->
                        <SelectItem :value="10">10</SelectItem>
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
                            <PaginationFirst size="sm" :disabled="currentPage === 1" @click="currentPage = 1" />

                            <!-- PREVIOUS -->
                            <PaginationPrevious size="sm" :disabled="currentPage === 1"
                                @click="currentPage = Math.max(1, currentPage - 1)" />

                            <!-- NEXT -->
                            <PaginationNext size="sm" :disabled="currentPage === Math.ceil(totalItems / itemsPerPage)"
                                @click="currentPage = Math.min(Math.ceil(totalItems / itemsPerPage), currentPage + 1)" />

                            <!-- LAST -->
                            <PaginationLast size="sm" :disabled="currentPage === Math.ceil(totalItems / itemsPerPage)"
                                @click="currentPage = Math.ceil(totalItems / itemsPerPage)" />

                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    </div>
</template>