<?php
namespace Database\Seeders;

use App\Models\AdminPermissionGroup;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class PermissionTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		//Admin Role
		Role::updateOrCreate([
			'name' => 'admin',
		], [
			'name' => 'admin',
			'display_name' => 'Admin',
			'description' => 'Admin Role',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		Role::updateOrCreate([
			'name' => 'custom',
		], [
			'name' => 'custom',
			'display_name' => 'Custom',
			'description' => 'Custom Role',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);

		//Admin Permission

		//Admin
		$adminG = AdminPermissionGroup::updateOrCreate([
			'key' => 'admins',
		], [
			'key' => 'admins',
			'name' => 'Admin',
			'status' => 1,
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		//Permission
		$p1 = Permission::updateOrCreate([
			'name' => 'admin-admins-create',
		], [
			'name' => 'admin-admins-create',
			'display_name' => 'Admin Create',
			'description' => 'Admin Create',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		$p2 = Permission::updateOrCreate([
			'name' => 'admin-admins-read',
		], [
			'name' => 'admin-admins-read',
			'display_name' => 'Admin Read',
			'description' => 'Admin Read',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		$p3 = Permission::updateOrCreate([
			'name' => 'admin-admins-update',
		], [
			'name' => 'admin-admins-update',
			'display_name' => 'Admin Update',
			'description' => 'Admin Update',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		$p4 = Permission::updateOrCreate([
			'name' => 'admin-admins-delete',
		], [
			'name' => 'admin-admins-delete',
			'display_name' => 'Admin Delete',
			'description' => 'Admin Delete',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		$adminG->permissions()->sync([$p1->id, $p2->id, $p3->id, $p4->id]);

		// Permission::updateOrCreate([
		//     'name' => 'admin-permission-groups-create',
		// ], [
		//     'name' => 'admin-permission-groups-create',
		//     'display_name' => 'Permission Group Create',
		//     'description' => 'Permission Group Create',
		//     'created_at' => Carbon::now(),
		//     'updated_at' => Carbon::now(),
		// ]
		// );
		// Permission::updateOrCreate([
		//     'name' => 'admin-permission-groups-read',
		// ], [
		//     'name' => 'admin-permission-groups-read',
		//     'display_name' => 'Permission Group Read',
		//     'description' => 'Permission Group Read',
		//     'created_at' => Carbon::now(),
		//     'updated_at' => Carbon::now(),
		// ]
		// );
		// Permission::updateOrCreate([
		//     'name' => 'admin-permission-groups-update',
		// ], [
		//     'name' => 'admin-permission-groups-update',
		//     'display_name' => 'Permission Group Update',
		//     'description' => 'Permission Group Update',
		//     'created_at' => Carbon::now(),
		//     'updated_at' => Carbon::now(),
		// ]
		// );
		// Permission::updateOrCreate([
		//     'name' => 'admin-permission-groups-delete',
		// ], [
		//     'name' => 'admin-permission-groups-delete',
		//     'display_name' => 'Permission Group Delete',
		//     'description' => 'Permission Group Delete',
		//     'created_at' => Carbon::now(),
		//     'updated_at' => Carbon::now(),
		// ]
		// );

		//User
		$userG = AdminPermissionGroup::updateOrCreate([
			'key' => 'users',
		], [
			'key' => 'users',
			'name' => 'User',
			'status' => 1,
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		$p1 = Permission::updateOrCreate([
			'name' => 'admin-users-create',
		], [
			'name' => 'admin-users-create',
			'display_name' => 'User Create',
			'description' => 'User Create',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		$p2 = Permission::updateOrCreate([
			'name' => 'admin-users-read',
		], [
			'name' => 'admin-users-read',
			'display_name' => 'User Read',
			'description' => 'User Read',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		$p3 = Permission::updateOrCreate([
			'name' => 'admin-users-update',
		], [
			'name' => 'admin-users-update',
			'display_name' => 'User Update',
			'description' => 'User Update',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		$p4 = Permission::updateOrCreate([
			'name' => 'admin-users-delete',
		], [
			'name' => 'admin-users-delete',
			'display_name' => 'User Delete',
			'description' => 'User Delete',
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now(),
		]
		);
		$userG->permissions()->sync([$p1->id, $p2->id, $p3->id, $p4->id]);

	}
}
