import { TerraformModule } from 'cdktf';
import { Construct } from 'constructs';
export interface ResourceNamingOptions {
    /**
     * Datalab prefix
     */
    readonly datalabPrefix?: string;
    /**
     * Datalab project name
     */
    readonly datalabProject?: string;
    /**
     * Environment [nonprod|preprod|prod]
     */
    readonly env?: string;
    /**
     * AWS Region (ex. eu-central-1)
     */
    readonly region?: string;
    /**
     * Name to add to resource name (calculated)
     */
    readonly resourceName: string;
    /**
     * AWS Resource type that the name will be generated by this module.
     */
    readonly resourceType: string;
}
export declare class ResourceNaming extends TerraformModule {
    private readonly inputs;
    constructor(scope: Construct, id: string, options: ResourceNamingOptions);
    get datalabPrefix(): string | undefined;
    set datalabPrefix(value: string | undefined);
    get datalabProject(): string | undefined;
    set datalabProject(value: string | undefined);
    get env(): string | undefined;
    set env(value: string | undefined);
    get region(): string | undefined;
    set region(value: string | undefined);
    get resourceName(): string;
    set resourceName(value: string);
    get resourceType(): string;
    set resourceType(value: string);
    get composedPrefixOutput(): string;
    get composedProjectPrefixOutput(): string;
    get composedResourceNameOutput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
