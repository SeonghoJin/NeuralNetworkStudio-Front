// eslint-disable-next-line max-classes-per-file
import { FlowExportObject } from 'react-flow-nns';
import Monitor from '../../core/Project/Montior';
import Optimizers from '../../core/Project/Optimizers';

export interface IProjectDto {
	config: ProjectConfigDto;
	content: IProjectContentDto;
	description: string;
	lastModify: Date;
	name: string;
	projectNo: string;
}

export interface IProjectContentDto {
	flowState: FlowExportObject;
	output: string;
}

export interface IProjectInfo {
	description: string;
	name: string;
}

export interface IGetProjectListParams {
	curPage?: string;
	pageSize?: number;
	sort?: string;
	filterTypes?: string;
	filterString?: string;
}

export const DEFAULT_PAGE_SIZE = 8;

export class GetProjectListParams implements IGetProjectListParams {
	curPage: string;

	pageSize: number;

	sort: string;

	filterString: string;

	filterTypes: string;

	constructor(projectListParams?: IGetProjectListParams) {
		this.curPage = projectListParams?.curPage || '';
		this.pageSize = projectListParams?.pageSize || DEFAULT_PAGE_SIZE;
		this.sort = projectListParams?.sort || '';
		this.filterString = projectListParams?.filterString || '';
		this.filterTypes = projectListParams?.filterString || '';
	}
}

export interface Projects {
	projects: Project[];
	pagination: Pagination;
}

export interface Pagination {
	curPage: number;
	pageSize: number;
	lastPage: number;
	itemCount: number;
}

export interface Project {
	projectNo: number;
	name: string;
	description: string;
	lastModify: Date;
}

export interface ProjectConfigDto {
	optimizer_name: Optimizers;
	optimizer_config: OptimizerConfigDto;
	loss: string;
	metrics: Array<string>;
	batch_size: number;
	epochs: number;
	early_stop: EarlyStopConfigDto;
	learning_rate_reduction: LearningRateReductionConfigDto;
}

export interface OptimizerConfigDto {
	learning_rate: number;
	beta_1: number;
	beta_2: number;
	epsilon: number;
	amsgrad: boolean;
}

export interface EarlyStopConfigDto {
	usage: boolean;
	monitor: Monitor;
	patience: number;
}

export interface LearningRateReductionConfigDto {
	usage: boolean;
	monitor: Monitor;
	patience: number;
	factor: number;
	min_lr: number;
}

export class LearningRateReductionConfig {
	usage: boolean;

	monitor: Monitor;

	patience: string;

	factor: string;

	min_lr: string;

	constructor(dto: LearningRateReductionConfigDto) {
		this.monitor = dto?.monitor || Monitor.ValAccuracy;
		this.patience = dto?.patience?.toString() || '0.01';
		this.factor = dto?.factor.toString() || '0.01';
		this.min_lr = dto?.min_lr.toString() || '0.01';
		this.usage = dto?.usage;
	}
}

export class EarlyStopConfig {
	usage: boolean;

	monitor: Monitor;

	patience: string;

	constructor(dto: EarlyStopConfigDto) {
		this.usage = dto?.usage || true;
		this.monitor = dto?.monitor || Monitor.ValAccuracy;
		this.patience = dto?.patience.toString() || '0.01';
	}
}

export class OptimizerConfig {
	learning_rate: string;

	beta_1: string;

	beta_2: string;

	epsilon: string;

	amsgrad: boolean;

	constructor(dto: OptimizerConfigDto) {
		this.learning_rate = dto?.learning_rate?.toString() || '0.001';
		this.beta_1 = dto?.beta_1?.toString() || '1';
		this.beta_2 = dto?.beta_2?.toString() || '1';
		this.epsilon = dto?.epsilon?.toString() || '1';
		this.amsgrad = dto?.amsgrad || true;
	}
}

export class ProjectConfig {
	optimizer_name: Optimizers;

	optimizer_config: OptimizerConfig;

	loss: string;

	metrics: Array<string>;

	batch_size: string;

	epochs: string;

	early_stop: EarlyStopConfig;

	learning_rate_reduction: LearningRateReductionConfig;

	constructor(dto: ProjectConfigDto) {
		this.optimizer_name = dto.optimizer_name || Optimizers.Adam;
		this.optimizer_config = new OptimizerConfig(dto?.optimizer_config || {});
		this.loss = dto.loss;
		this.metrics = dto.metrics;
		this.batch_size = dto.batch_size.toString();
		this.epochs = dto.epochs.toString();
		this.early_stop = new EarlyStopConfig(dto.early_stop);
		this.learning_rate_reduction = new LearningRateReductionConfig(dto.learning_rate_reduction);
	}
}
