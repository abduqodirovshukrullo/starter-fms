<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Fleet
 * 
 * @property int $id
 * @property int $number
 * @property string $type
 * @property int $status
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property User|null $user
 * @property Collection|FleetDetail[] $fleet_details
 * @property Collection|FleetService[] $fleet_services
 * @property Collection|FleetSensor[] $fleet_sensors
 * @property Collection|FleetActivity[] $fleet_activities
 *
 * @package App\Models
 */
class Fleet extends Model
{
	protected $table = 'fleets';
	protected $perPage = 10;
	protected $casts = [
		'number' => 'int',
		'status' => 'int',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $appends = ['name'];

	protected $fillable = [
		'number',
		'type',
		'status'
	];

	protected $hidden = [
		'details',
		'updated_by',
		'created_by'
	];

	protected function name(): Attribute
	{
		return Attribute::make(
			get: fn ($value, $attributes) => $this->details->name,
		);
	}

	protected function status(): Attribute
	{
		return Attribute::make(
			get: fn ($value, $attributes) => $this->getStatusText($value),
		);
	}

	public function getStatusText($value){
		$text = '';
		switch($value){
			case 0:
				$text = 'new';
				break;
			default:
				$text = "undefined";
				break;
		}

		return $text;

	}

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}

	public function details()
	{
		return $this->hasOne(FleetDetail::class);
	}

	public function fleet_services()
	{
		return $this->hasMany(FleetService::class);
	}

	public function fleet_sensors()
	{
		return $this->hasMany(FleetSensor::class);
	}

	public function fleet_activities()
	{
		return $this->hasMany(FleetActivity::class);
	}
}
