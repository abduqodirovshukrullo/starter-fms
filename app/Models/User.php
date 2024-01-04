<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;
use Sqits\UserStamps\Concerns\HasUserStamps;
/**
 * Class User
 * 
 * @property int $id
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|Service[] $services
 * @property Collection|ServiceAttribute[] $service_attributes
 * @property Collection|Fleet[] $fleets
 * @property Collection|FleetDetail[] $fleet_details
 * @property Collection|FleetService[] $fleet_services
 * @property Collection|Sensor[] $sensors
 * @property Collection|SensorAttribute[] $sensor_attributes
 * @property Collection|FleetSensor[] $fleet_sensors
 * @property Collection|Activity[] $activities
 * @property Collection|FleetActivity[] $fleet_activities
 * @property Collection|Path[] $paths
 * @property Collection|ActivityLog[] $activity_logs
 *
 * @package App\Models
 */
class User extends Authenticatable
{
	protected $table = 'users';
	protected $perPage = 10;

    use HasApiTokens, HasFactory, Notifiable, HasRoles, HasPermissions;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $appends = ['rolename'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'roles',
        'permissions',
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function abilities(){
       $permissions = $this->getAllPermissions();
       $abilities = [];
       foreach($permissions as $item){
        $exploded = explode(':',$item['name']);
        $abilities[] = [
            'subject' => $exploded[1],
            'action' => $exploded[0]
        ];
       }
       return $abilities;
    }

    protected function rolename(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $this->roles()->first()->name,
        );
    }

	public function services()
	{
		return $this->hasMany(Service::class, 'updated_by');
	}

	public function service_attributes()
	{
		return $this->hasMany(ServiceAttribute::class, 'updated_by');
	}

	public function fleets()
	{
		return $this->hasMany(Fleet::class, 'updated_by');
	}

	public function fleet_details()
	{
		return $this->hasMany(FleetDetail::class, 'updated_by');
	}

	public function fleet_services()
	{
		return $this->hasMany(FleetService::class, 'updated_by');
	}

	public function sensors()
	{
		return $this->hasMany(Sensor::class, 'updated_by');
	}

	public function sensor_attributes()
	{
		return $this->hasMany(SensorAttribute::class, 'updated_by');
	}

	public function fleet_sensors()
	{
		return $this->hasMany(FleetSensor::class, 'updated_by');
	}

	public function activities()
	{
		return $this->hasMany(Activity::class, 'updated_by');
	}

	public function fleet_activities()
	{
		return $this->hasMany(FleetActivity::class, 'updated_by');
	}

	public function paths()
	{
		return $this->hasMany(Path::class, 'updated_by');
	}

	public function activity_logs()
	{
		return $this->hasMany(ActivityLog::class, 'updated_by');
	}
}
