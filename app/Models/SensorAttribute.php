<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class SensorAttribute
 * 
 * @property int $id
 * @property string $name
 * @property int $sensor_id
 * @property string $unit_measure
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property Sensor $sensor
 * @property User|null $user
 * @property Collection|FleetSensor[] $fleet_sensors
 *
 * @package App\Models
 */
class SensorAttribute extends Model
{
	protected $table = 'sensor_attributes';
	protected $perPage = 10;

	protected $casts = [
		'sensor_id' => 'int',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'name',
		'sensor_id',
		'unit_measure'
	];

	public function sensor()
	{
		return $this->belongsTo(Sensor::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}

	public function fleet_sensors()
	{
		return $this->hasMany(FleetSensor::class);
	}
}
