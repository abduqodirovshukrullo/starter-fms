<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ServiceAttribute
 * 
 * @property int $id
 * @property string $name
 * @property int $service_id
 * @property string $unit_measure
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $created_by
 * @property int|null $updated_by
 * 
 * @property Service $service
 * @property User|null $user
 * @property Collection|FleetService[] $fleet_services
 *
 * @package App\Models
 */
class ServiceAttribute extends Model
{
	protected $table = 'service_attributes';
	protected $perPage = 10;

	protected $casts = [
		'service_id' => 'int',
		'created_by' => 'int',
		'updated_by' => 'int'
	];

	protected $fillable = [
		'name',
		'service_id',
		'unit_measure'
	];

	public function service()
	{
		return $this->belongsTo(Service::class);
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'updated_by');
	}

	public function fleet_services()
	{
		return $this->hasMany(FleetService::class, 'service_attributes_id');
	}
}
