/*import { DataAwsDefaultTags } from "@cdktf/provider-aws";*/
import { s3 } from "@cdktf/provider-aws";
import { Construct } from "constructs";
// @ts-ignore
import { ResourceNaming } from "../../.gen/modules/resource_naming";
import { S3BucketConfig } from '@cdktf/provider-aws/lib/s3';

export interface IDpS3Config extends S3BucketConfig {
  prefix: string;
}

export class DpS3 extends s3.S3Bucket {
  /**
   * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket aws_s3_bucket} Based on the AXA Group Policies
   *
   * @param scope The scope in which to define this construct
   * @param name The name, used in the resourceNaming method to retrieve the right nomenclature.
   * @param config IDpS3Config = {}
   */
  constructor(scope: Construct, name: string, config: IDpS3Config) {
    /*let defaultTags = new DataAwsDefaultTags(scope, "default_tags");
     let computedName = Utils.resourresourceNamingceNaming(name, defaultTags.tags);*/
    const resourceNaming = new ResourceNaming(scope, "resource_naming", {
      resourceName: name,
      resourceType: "s3_bucket"
    })
    super(scope, "s3_bucket", {
      bucketPrefix: config.prefix,
      bucket: resourceNaming.composedResourceNameOutput
    });
  }
}
