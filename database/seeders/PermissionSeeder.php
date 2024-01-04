<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Admin

        Permission::create(['name' => 'create:user']);
        Permission::create(['name' => 'delete:user']);
        Permission::create(['name' => 'manage:user']);
        Permission::create(['name' => 'read:logs']);
        Permission::create(['name' => 'manage:logs']);
        Permission::create(['name' => 'attach:permission']);
        Permission::create(['name' => 'detach:permission']);
        Permission::create(['name' => 'manage:permission']);

        // SuperVisor
        
        Permission::create(['name' => 'read:own']);
        Permission::create(['name' => 'update:own']);
        Permission::create(['name' => 'list:own']);
        Permission::create(['name' => 'create:own']);
        Permission::create(['name' => 'monitor:own']);
        Permission::create(['name' => 'manage:profile']);
        Permission::create(['name' => 'manage:vehicle']);
        Permission::create(['name' => 'manage:device']);


    }
}
