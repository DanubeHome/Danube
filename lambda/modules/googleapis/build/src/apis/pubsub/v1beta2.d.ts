/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace pubsub_v1beta2 {
    export interface Options extends GlobalOptions {
        version: 'v1beta2';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Cloud Pub/Sub API
     *
     * Provides reliable, many-to-many, asynchronous messaging between applications.
     *
     * @example
     * const {google} = require('googleapis');
     * const pubsub = google.pubsub('v1beta2');
     *
     * @namespace pubsub
     * @type {Function}
     * @version v1beta2
     * @variation v1beta2
     * @param {object=} options Options for Pubsub
     */
    export class Pubsub {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Request for the Acknowledge method.
     */
    export interface Schema$AcknowledgeRequest {
        /**
         * The acknowledgment ID for the messages being acknowledged that was returned by the Pub/Sub system in the `Pull` response. Must not be empty.
         */
        ackIds?: string[] | null;
    }
    /**
     * Associates `members` with a `role`.
     */
    export interface Schema$Binding {
        /**
         * The condition that is associated with this binding.  If the condition evaluates to `true`, then this binding applies to the current request.  If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the members in this binding.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        condition?: Schema$Expr;
        /**
         * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.  * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a user that has been recently deleted. For    example, `alice@example.com?uid=123456789012345678901`. If the user is    recovered, this value reverts to `user:{emailid}` and the recovered user    retains the role in the binding.  * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus    unique identifier) representing a service account that has been recently    deleted. For example,    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.    If the service account is undeleted, this value reverts to    `serviceAccount:{emailid}` and the undeleted service account retains the    role in the binding.  * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a Google group that has been recently    deleted. For example, `admins@example.com?uid=123456789012345678901`. If    the group is recovered, this value reverts to `group:{emailid}` and the    recovered group retains the role in the binding.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
         */
        members?: string[] | null;
        /**
         * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
         */
        role?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
     */
    export interface Schema$Empty {
    }
    /**
     * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.  Example (Comparison):      title: &quot;Summary size limit&quot;     description: &quot;Determines if a summary is less than 100 chars&quot;     expression: &quot;document.summary.size() &lt; 100&quot;  Example (Equality):      title: &quot;Requestor is owner&quot;     description: &quot;Determines if requestor is the document owner&quot;     expression: &quot;document.owner == request.auth.claims.email&quot;  Example (Logic):      title: &quot;Public documents&quot;     description: &quot;Determine whether the document should be publicly visible&quot;     expression: &quot;document.type != &#39;private&#39; &amp;&amp; document.type != &#39;internal&#39;&quot;  Example (Data Manipulation):      title: &quot;Notification string&quot;     description: &quot;Create a notification string with a timestamp.&quot;     expression: &quot;&#39;New message received at &#39; + string(document.create_time)&quot;  The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
     */
    export interface Schema$Expr {
        /**
         * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
         */
        description?: string | null;
        /**
         * Textual representation of an expression in Common Expression Language syntax.
         */
        expression?: string | null;
        /**
         * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
         */
        location?: string | null;
        /**
         * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
         */
        title?: string | null;
    }
    /**
     * Response for the `ListSubscriptions` method.
     */
    export interface Schema$ListSubscriptionsResponse {
        /**
         * If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListSubscriptionsRequest` to get more subscriptions.
         */
        nextPageToken?: string | null;
        /**
         * The subscriptions that match the request.
         */
        subscriptions?: Schema$Subscription[];
    }
    /**
     * Response for the `ListTopics` method.
     */
    export interface Schema$ListTopicsResponse {
        /**
         * If not empty, indicates that there may be more topics that match the request; this value should be passed in a new `ListTopicsRequest`.
         */
        nextPageToken?: string | null;
        /**
         * The resulting topics.
         */
        topics?: Schema$Topic[];
    }
    /**
     * Response for the `ListTopicSubscriptions` method.
     */
    export interface Schema$ListTopicSubscriptionsResponse {
        /**
         * If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListTopicSubscriptionsRequest` to get more subscriptions.
         */
        nextPageToken?: string | null;
        /**
         * The names of the subscriptions that match the request.
         */
        subscriptions?: string[] | null;
    }
    /**
     * Request for the ModifyAckDeadline method.
     */
    export interface Schema$ModifyAckDeadlineRequest {
        /**
         * The new ack deadline with respect to the time this request was sent to the Pub/Sub system. Must be &gt;= 0. For example, if the value is 10, the new ack deadline will expire 10 seconds after the `ModifyAckDeadline` call was made. Specifying zero may immediately make the message available for another pull request.
         */
        ackDeadlineSeconds?: number | null;
        /**
         * The acknowledgment ID. Either this or ack_ids must be populated, but not both.
         */
        ackId?: string | null;
        /**
         * List of acknowledgment IDs.
         */
        ackIds?: string[] | null;
    }
    /**
     * Request for the ModifyPushConfig method.
     */
    export interface Schema$ModifyPushConfigRequest {
        /**
         * The push configuration for future deliveries.  An empty `pushConfig` indicates that the Pub/Sub system should stop pushing messages from the given subscription and allow messages to be pulled and acknowledged - effectively pausing the subscription if `Pull` is not called.
         */
        pushConfig?: Schema$PushConfig;
    }
    /**
     * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect).
     */
    export interface Schema$OidcToken {
        /**
         * Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used.
         */
        audience?: string | null;
        /**
         * [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating the OIDC token. The caller (for CreateSubscription, UpdateSubscription, and ModifyPushConfig RPCs) must have the iam.serviceAccounts.actAs permission for the service account.
         */
        serviceAccountEmail?: string | null;
    }
    /**
     * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [             &quot;user:eve@example.com&quot;           ],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
     */
    export interface Schema$Policy {
        /**
         * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
         */
        bindings?: Schema$Binding[];
        /**
         * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
         */
        etag?: string | null;
        /**
         * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        version?: number | null;
    }
    /**
     * Request for the Publish method.
     */
    export interface Schema$PublishRequest {
        /**
         * The messages to publish.
         */
        messages?: Schema$PubsubMessage[];
    }
    /**
     * Response for the `Publish` method.
     */
    export interface Schema$PublishResponse {
        /**
         * The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic.
         */
        messageIds?: string[] | null;
    }
    /**
     * A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
     */
    export interface Schema$PubsubMessage {
        /**
         * Optional attributes for this message.
         */
        attributes?: {
            [key: string]: string;
        } | null;
        /**
         * The message payload. For JSON requests, the value of this field must be [base64-encoded](https://tools.ietf.org/html/rfc4648).
         */
        data?: string | null;
        /**
         * ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call.
         */
        messageId?: string | null;
        /**
         * The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call.
         */
        publishTime?: string | null;
    }
    /**
     * Request for the `Pull` method.
     */
    export interface Schema$PullRequest {
        /**
         * The maximum number of messages returned for this request. The Pub/Sub system may return fewer than the number specified.
         */
        maxMessages?: number | null;
        /**
         * Optional. If this is specified as true the system will respond immediately even if it is not able to return a message in the `Pull` response. Otherwise the system is allowed to wait until at least one message is available rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response. Warning: setting this field to `true` is discouraged because it adversely impacts the performance of `Pull` operations. We recommend that users do not set this field.
         */
        returnImmediately?: boolean | null;
    }
    /**
     * Response for the `Pull` method.
     */
    export interface Schema$PullResponse {
        /**
         * Received Pub/Sub messages. The Pub/Sub system will return zero messages if there are no more available in the backlog. The Pub/Sub system may return fewer than the `maxMessages` requested even if there are more messages available in the backlog.
         */
        receivedMessages?: Schema$ReceivedMessage[];
    }
    /**
     * Configuration for a push delivery endpoint.
     */
    export interface Schema$PushConfig {
        /**
         * Endpoint configuration attributes.  Every endpoint has a set of API supported attributes that can be used to control different aspects of the message delivery.  The currently supported attribute is `x-goog-version`, which you can use to change the format of the push message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the envelope (i.e. its fields and metadata). The endpoint version is based on the version of the Pub/Sub API.  If not present during the `CreateSubscription` call, it will default to the version of the API used to make such call. If not present during a `ModifyPushConfig` call, its value will not be changed. `GetSubscription` calls will always return a valid version, even if the subscription was created without this attribute.  The possible values for this attribute are:  * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API. * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API.
         */
        attributes?: {
            [key: string]: string;
        } | null;
        /**
         * If specified, Pub/Sub will generate and attach an OIDC JWT token as an `Authorization` header in the HTTP request for every pushed message.
         */
        oidcToken?: Schema$OidcToken;
        /**
         * A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use &quot;https://example.com/push&quot;.
         */
        pushEndpoint?: string | null;
    }
    /**
     * A message and its corresponding acknowledgment ID.
     */
    export interface Schema$ReceivedMessage {
        /**
         * This ID can be used to acknowledge the received message.
         */
        ackId?: string | null;
        /**
         * The message.
         */
        message?: Schema$PubsubMessage;
    }
    /**
     * Request message for `SetIamPolicy` method.
     */
    export interface Schema$SetIamPolicyRequest {
        /**
         * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
         */
        policy?: Schema$Policy;
    }
    /**
     * A subscription resource.
     */
    export interface Schema$Subscription {
        /**
         * This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. After message delivery but before the ack deadline expires and before the message is acknowledged, it is an outstanding message and will not be delivered again during that time (on a best-effort basis).  For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using pull. The maximum custom deadline you can specify is 600 seconds (10 minutes).  For push delivery, this value is also used to set the request timeout for the call to the push endpoint.  If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message.  If this parameter is 0, a default value of 10 seconds is used.
         */
        ackDeadlineSeconds?: number | null;
        /**
         * The name of the subscription. It must have the format `&quot;projects/{project}/subscriptions/{subscription}&quot;`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `&quot;goog&quot;`.
         */
        name?: string | null;
        /**
         * If push delivery is used with this subscription, this field is used to configure it. An empty `pushConfig` signifies that the subscriber will pull and ack messages using API methods.
         */
        pushConfig?: Schema$PushConfig;
        /**
         * The name of the topic from which this subscription is receiving messages. The value of this field will be `_deleted-topic_` if the topic has been deleted.
         */
        topic?: string | null;
    }
    /**
     * Request message for `TestIamPermissions` method.
     */
    export interface Schema$TestIamPermissionsRequest {
        /**
         * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
         */
        permissions?: string[] | null;
    }
    /**
     * Response message for `TestIamPermissions` method.
     */
    export interface Schema$TestIamPermissionsResponse {
        /**
         * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
         */
        permissions?: string[] | null;
    }
    /**
     * A topic resource.
     */
    export interface Schema$Topic {
        /**
         * The name of the topic. It must have the format `&quot;projects/{project}/topics/{topic}&quot;`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `&quot;goog&quot;`.
         */
        name?: string | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        subscriptions: Resource$Projects$Subscriptions;
        topics: Resource$Projects$Topics;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Subscriptions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * pubsub.projects.subscriptions.acknowledge
         * @desc Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription.  Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.acknowledge({
         *     // The subscription whose message is being acknowledged.
         *     subscription: 'projects/my-project/subscriptions/my-subscription',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "ackIds": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.acknowledge
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.subscription The subscription whose message is being acknowledged.
         * @param {().AcknowledgeRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        acknowledge(params: Params$Resource$Projects$Subscriptions$Acknowledge, options: StreamMethodOptions): GaxiosPromise<Readable>;
        acknowledge(params?: Params$Resource$Projects$Subscriptions$Acknowledge, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        acknowledge(params: Params$Resource$Projects$Subscriptions$Acknowledge, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        acknowledge(params: Params$Resource$Projects$Subscriptions$Acknowledge, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        acknowledge(params: Params$Resource$Projects$Subscriptions$Acknowledge, callback: BodyResponseCallback<Schema$Empty>): void;
        acknowledge(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * pubsub.projects.subscriptions.create
         * @desc Creates a subscription to a given topic. If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`.  If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic. Note that for REST API requests, you must specify a name.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.create({
         *     // The name of the subscription. It must have the format
         *     // `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must
         *     // start with a letter, and contain only letters (`[A-Za-z]`), numbers
         *     // (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),
         *     // plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters
         *     // in length, and it must not start with `"goog"`.
         *     name: 'projects/my-project/subscriptions/my-subscription',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "ackDeadlineSeconds": 0,
         *       //   "name": "my_name",
         *       //   "pushConfig": {},
         *       //   "topic": "my_topic"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "ackDeadlineSeconds": 0,
         *   //   "name": "my_name",
         *   //   "pushConfig": {},
         *   //   "topic": "my_topic"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
         * @param {().Subscription} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params: Params$Resource$Projects$Subscriptions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Subscriptions$Create, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        create(params: Params$Resource$Projects$Subscriptions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Subscriptions$Create, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        create(params: Params$Resource$Projects$Subscriptions$Create, callback: BodyResponseCallback<Schema$Subscription>): void;
        create(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * pubsub.projects.subscriptions.delete
         * @desc Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription, or its topic unless the same topic is specified.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.delete({
         *     // The subscription to delete.
         *     subscription: 'projects/my-project/subscriptions/my-subscription',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.subscription The subscription to delete.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params: Params$Resource$Projects$Subscriptions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Subscriptions$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Subscriptions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Subscriptions$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Subscriptions$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * pubsub.projects.subscriptions.get
         * @desc Gets the configuration details of a subscription.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.get({
         *     // The name of the subscription to get.
         *     subscription: 'projects/my-project/subscriptions/my-subscription',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "ackDeadlineSeconds": 0,
         *   //   "name": "my_name",
         *   //   "pushConfig": {},
         *   //   "topic": "my_topic"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.subscription The name of the subscription to get.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Projects$Subscriptions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Subscriptions$Get, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        get(params: Params$Resource$Projects$Subscriptions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Subscriptions$Get, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        get(params: Params$Resource$Projects$Subscriptions$Get, callback: BodyResponseCallback<Schema$Subscription>): void;
        get(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * pubsub.projects.subscriptions.getIamPolicy
         * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.getIamPolicy({
         *     // Optional. The policy format version to be returned.
         *     //
         *     // Valid values are 0, 1, and 3. Requests specifying an invalid value will be
         *     // rejected.
         *     //
         *     // Requests for policies with any conditional bindings must specify version 3.
         *     // Policies without any conditional bindings may specify any valid value or
         *     // leave the field unset.
         *     //
         *     // To learn which resources support conditions in their IAM policies, see the
         *     // [IAM
         *     // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         *     'options.requestedPolicyVersion': 'placeholder-value',
         *     // REQUIRED: The resource for which the policy is being requested.
         *     // See the operation documentation for the appropriate value for this field.
         *     resource: 'projects/my-project/subscriptions/my-subscription',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "bindings": [],
         *   //   "etag": "my_etag",
         *   //   "version": 0
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.getIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy(params: Params$Resource$Projects$Subscriptions$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Subscriptions$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Subscriptions$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Subscriptions$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Subscriptions$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * pubsub.projects.subscriptions.list
         * @desc Lists matching subscriptions.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.list({
         *     // Maximum number of subscriptions to return.
         *     pageSize: 'placeholder-value',
         *     // The value returned by the last `ListSubscriptionsResponse`; indicates that
         *     // this is a continuation of a prior `ListSubscriptions` call, and that the
         *     // system should return the next page of data.
         *     pageToken: 'placeholder-value',
         *     // The name of the cloud project that subscriptions belong to.
         *     project: 'projects/my-project',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "subscriptions": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Maximum number of subscriptions to return.
         * @param {string=} params.pageToken The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
         * @param {string} params.project The name of the cloud project that subscriptions belong to.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Subscriptions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Subscriptions$List, options?: MethodOptions): GaxiosPromise<Schema$ListSubscriptionsResponse>;
        list(params: Params$Resource$Projects$Subscriptions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Subscriptions$List, options: MethodOptions | BodyResponseCallback<Schema$ListSubscriptionsResponse>, callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
        list(params: Params$Resource$Projects$Subscriptions$List, callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
        /**
         * pubsub.projects.subscriptions.modifyAckDeadline
         * @desc Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.modifyAckDeadline({
         *     // The name of the subscription.
         *     subscription: 'projects/my-project/subscriptions/my-subscription',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "ackDeadlineSeconds": 0,
         *       //   "ackId": "my_ackId",
         *       //   "ackIds": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.modifyAckDeadline
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.subscription The name of the subscription.
         * @param {().ModifyAckDeadlineRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        modifyAckDeadline(params: Params$Resource$Projects$Subscriptions$Modifyackdeadline, options: StreamMethodOptions): GaxiosPromise<Readable>;
        modifyAckDeadline(params?: Params$Resource$Projects$Subscriptions$Modifyackdeadline, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        modifyAckDeadline(params: Params$Resource$Projects$Subscriptions$Modifyackdeadline, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        modifyAckDeadline(params: Params$Resource$Projects$Subscriptions$Modifyackdeadline, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        modifyAckDeadline(params: Params$Resource$Projects$Subscriptions$Modifyackdeadline, callback: BodyResponseCallback<Schema$Empty>): void;
        modifyAckDeadline(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * pubsub.projects.subscriptions.modifyPushConfig
         * @desc Modifies the `PushConfig` for a specified subscription.  This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.modifyPushConfig({
         *     // The name of the subscription.
         *     subscription: 'projects/my-project/subscriptions/my-subscription',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "pushConfig": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.modifyPushConfig
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.subscription The name of the subscription.
         * @param {().ModifyPushConfigRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        modifyPushConfig(params: Params$Resource$Projects$Subscriptions$Modifypushconfig, options: StreamMethodOptions): GaxiosPromise<Readable>;
        modifyPushConfig(params?: Params$Resource$Projects$Subscriptions$Modifypushconfig, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        modifyPushConfig(params: Params$Resource$Projects$Subscriptions$Modifypushconfig, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        modifyPushConfig(params: Params$Resource$Projects$Subscriptions$Modifypushconfig, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        modifyPushConfig(params: Params$Resource$Projects$Subscriptions$Modifypushconfig, callback: BodyResponseCallback<Schema$Empty>): void;
        modifyPushConfig(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * pubsub.projects.subscriptions.pull
         * @desc Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The server may return `UNAVAILABLE` if there are too many concurrent pull requests pending for the given subscription.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.pull({
         *     // The subscription from which messages should be pulled.
         *     subscription: 'projects/my-project/subscriptions/my-subscription',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "maxMessages": 0,
         *       //   "returnImmediately": false
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "receivedMessages": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.pull
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.subscription The subscription from which messages should be pulled.
         * @param {().PullRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        pull(params: Params$Resource$Projects$Subscriptions$Pull, options: StreamMethodOptions): GaxiosPromise<Readable>;
        pull(params?: Params$Resource$Projects$Subscriptions$Pull, options?: MethodOptions): GaxiosPromise<Schema$PullResponse>;
        pull(params: Params$Resource$Projects$Subscriptions$Pull, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        pull(params: Params$Resource$Projects$Subscriptions$Pull, options: MethodOptions | BodyResponseCallback<Schema$PullResponse>, callback: BodyResponseCallback<Schema$PullResponse>): void;
        pull(params: Params$Resource$Projects$Subscriptions$Pull, callback: BodyResponseCallback<Schema$PullResponse>): void;
        pull(callback: BodyResponseCallback<Schema$PullResponse>): void;
        /**
         * pubsub.projects.subscriptions.setIamPolicy
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.setIamPolicy({
         *     // REQUIRED: The resource for which the policy is being specified.
         *     // See the operation documentation for the appropriate value for this field.
         *     resource: 'projects/my-project/subscriptions/my-subscription',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "policy": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "bindings": [],
         *   //   "etag": "my_etag",
         *   //   "version": 0
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.setIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {().SetIamPolicyRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy(params: Params$Resource$Projects$Subscriptions$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Subscriptions$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Subscriptions$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Subscriptions$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Subscriptions$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * pubsub.projects.subscriptions.testIamPermissions
         * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.subscriptions.testIamPermissions({
         *     // REQUIRED: The resource for which the policy detail is being requested.
         *     // See the operation documentation for the appropriate value for this field.
         *     resource: 'projects/my-project/subscriptions/my-subscription',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "permissions": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "permissions": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.subscriptions.testIamPermissions
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().TestIamPermissionsRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions(params: Params$Resource$Projects$Subscriptions$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Subscriptions$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Subscriptions$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Subscriptions$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Subscriptions$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Subscriptions$Acknowledge extends StandardParameters {
        /**
         * The subscription whose message is being acknowledged.
         */
        subscription?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AcknowledgeRequest;
    }
    export interface Params$Resource$Projects$Subscriptions$Create extends StandardParameters {
        /**
         * The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Subscription;
    }
    export interface Params$Resource$Projects$Subscriptions$Delete extends StandardParameters {
        /**
         * The subscription to delete.
         */
        subscription?: string;
    }
    export interface Params$Resource$Projects$Subscriptions$Get extends StandardParameters {
        /**
         * The name of the subscription to get.
         */
        subscription?: string;
    }
    export interface Params$Resource$Projects$Subscriptions$Getiampolicy extends StandardParameters {
        /**
         * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Subscriptions$List extends StandardParameters {
        /**
         * Maximum number of subscriptions to return.
         */
        pageSize?: number;
        /**
         * The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
         */
        pageToken?: string;
        /**
         * The name of the cloud project that subscriptions belong to.
         */
        project?: string;
    }
    export interface Params$Resource$Projects$Subscriptions$Modifyackdeadline extends StandardParameters {
        /**
         * The name of the subscription.
         */
        subscription?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ModifyAckDeadlineRequest;
    }
    export interface Params$Resource$Projects$Subscriptions$Modifypushconfig extends StandardParameters {
        /**
         * The name of the subscription.
         */
        subscription?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ModifyPushConfigRequest;
    }
    export interface Params$Resource$Projects$Subscriptions$Pull extends StandardParameters {
        /**
         * The subscription from which messages should be pulled.
         */
        subscription?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PullRequest;
    }
    export interface Params$Resource$Projects$Subscriptions$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Subscriptions$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Topics {
        context: APIRequestContext;
        subscriptions: Resource$Projects$Topics$Subscriptions;
        constructor(context: APIRequestContext);
        /**
         * pubsub.projects.topics.create
         * @desc Creates the given topic with the given name.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.topics.create({
         *     // The name of the topic. It must have the format
         *     // `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
         *     // and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
         *     // underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
         *     // signs (`%`). It must be between 3 and 255 characters in length, and it
         *     // must not start with `"goog"`.
         *     name: 'projects/my-project/topics/my-topic',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.topics.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
         * @param {().Topic} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params: Params$Resource$Projects$Topics$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Topics$Create, options?: MethodOptions): GaxiosPromise<Schema$Topic>;
        create(params: Params$Resource$Projects$Topics$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Topics$Create, options: MethodOptions | BodyResponseCallback<Schema$Topic>, callback: BodyResponseCallback<Schema$Topic>): void;
        create(params: Params$Resource$Projects$Topics$Create, callback: BodyResponseCallback<Schema$Topic>): void;
        create(callback: BodyResponseCallback<Schema$Topic>): void;
        /**
         * pubsub.projects.topics.delete
         * @desc Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.topics.delete({
         *     // Name of the topic to delete.
         *     topic: 'projects/my-project/topics/my-topic',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.topics.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.topic Name of the topic to delete.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params: Params$Resource$Projects$Topics$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Topics$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Topics$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Topics$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Topics$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * pubsub.projects.topics.get
         * @desc Gets the configuration of a topic.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.topics.get({
         *     // The name of the topic to get.
         *     topic: 'projects/my-project/topics/my-topic',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.topics.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.topic The name of the topic to get.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Projects$Topics$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Topics$Get, options?: MethodOptions): GaxiosPromise<Schema$Topic>;
        get(params: Params$Resource$Projects$Topics$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Topics$Get, options: MethodOptions | BodyResponseCallback<Schema$Topic>, callback: BodyResponseCallback<Schema$Topic>): void;
        get(params: Params$Resource$Projects$Topics$Get, callback: BodyResponseCallback<Schema$Topic>): void;
        get(callback: BodyResponseCallback<Schema$Topic>): void;
        /**
         * pubsub.projects.topics.getIamPolicy
         * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.topics.getIamPolicy({
         *     // Optional. The policy format version to be returned.
         *     //
         *     // Valid values are 0, 1, and 3. Requests specifying an invalid value will be
         *     // rejected.
         *     //
         *     // Requests for policies with any conditional bindings must specify version 3.
         *     // Policies without any conditional bindings may specify any valid value or
         *     // leave the field unset.
         *     //
         *     // To learn which resources support conditions in their IAM policies, see the
         *     // [IAM
         *     // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         *     'options.requestedPolicyVersion': 'placeholder-value',
         *     // REQUIRED: The resource for which the policy is being requested.
         *     // See the operation documentation for the appropriate value for this field.
         *     resource: 'projects/my-project/topics/my-topic',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "bindings": [],
         *   //   "etag": "my_etag",
         *   //   "version": 0
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.topics.getIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy(params: Params$Resource$Projects$Topics$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Topics$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Topics$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Topics$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Topics$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * pubsub.projects.topics.list
         * @desc Lists matching topics.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.topics.list({
         *     // Maximum number of topics to return.
         *     pageSize: 'placeholder-value',
         *     // The value returned by the last `ListTopicsResponse`; indicates that this is
         *     // a continuation of a prior `ListTopics` call, and that the system should
         *     // return the next page of data.
         *     pageToken: 'placeholder-value',
         *     // The name of the cloud project that topics belong to.
         *     project: 'projects/my-project',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "topics": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.topics.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Maximum number of topics to return.
         * @param {string=} params.pageToken The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
         * @param {string} params.project The name of the cloud project that topics belong to.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Topics$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Topics$List, options?: MethodOptions): GaxiosPromise<Schema$ListTopicsResponse>;
        list(params: Params$Resource$Projects$Topics$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Topics$List, options: MethodOptions | BodyResponseCallback<Schema$ListTopicsResponse>, callback: BodyResponseCallback<Schema$ListTopicsResponse>): void;
        list(params: Params$Resource$Projects$Topics$List, callback: BodyResponseCallback<Schema$ListTopicsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTopicsResponse>): void;
        /**
         * pubsub.projects.topics.publish
         * @desc Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist. The message payload must not be empty; it must contain  either a non-empty data field, or at least one attribute.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.topics.publish({
         *     // The messages in the request will be published on this topic.
         *     topic: 'projects/my-project/topics/my-topic',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "messages": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "messageIds": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.topics.publish
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.topic The messages in the request will be published on this topic.
         * @param {().PublishRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        publish(params: Params$Resource$Projects$Topics$Publish, options: StreamMethodOptions): GaxiosPromise<Readable>;
        publish(params?: Params$Resource$Projects$Topics$Publish, options?: MethodOptions): GaxiosPromise<Schema$PublishResponse>;
        publish(params: Params$Resource$Projects$Topics$Publish, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        publish(params: Params$Resource$Projects$Topics$Publish, options: MethodOptions | BodyResponseCallback<Schema$PublishResponse>, callback: BodyResponseCallback<Schema$PublishResponse>): void;
        publish(params: Params$Resource$Projects$Topics$Publish, callback: BodyResponseCallback<Schema$PublishResponse>): void;
        publish(callback: BodyResponseCallback<Schema$PublishResponse>): void;
        /**
         * pubsub.projects.topics.setIamPolicy
         * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.topics.setIamPolicy({
         *     // REQUIRED: The resource for which the policy is being specified.
         *     // See the operation documentation for the appropriate value for this field.
         *     resource: 'projects/my-project/topics/my-topic',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "policy": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "bindings": [],
         *   //   "etag": "my_etag",
         *   //   "version": 0
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.topics.setIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {().SetIamPolicyRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy(params: Params$Resource$Projects$Topics$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Topics$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Topics$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Topics$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Topics$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * pubsub.projects.topics.testIamPermissions
         * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.topics.testIamPermissions({
         *     // REQUIRED: The resource for which the policy detail is being requested.
         *     // See the operation documentation for the appropriate value for this field.
         *     resource: 'projects/my-project/topics/my-topic',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "permissions": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "permissions": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.topics.testIamPermissions
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().TestIamPermissionsRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions(params: Params$Resource$Projects$Topics$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Topics$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Topics$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Topics$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Topics$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Topics$Create extends StandardParameters {
        /**
         * The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Topic;
    }
    export interface Params$Resource$Projects$Topics$Delete extends StandardParameters {
        /**
         * Name of the topic to delete.
         */
        topic?: string;
    }
    export interface Params$Resource$Projects$Topics$Get extends StandardParameters {
        /**
         * The name of the topic to get.
         */
        topic?: string;
    }
    export interface Params$Resource$Projects$Topics$Getiampolicy extends StandardParameters {
        /**
         * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Topics$List extends StandardParameters {
        /**
         * Maximum number of topics to return.
         */
        pageSize?: number;
        /**
         * The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
         */
        pageToken?: string;
        /**
         * The name of the cloud project that topics belong to.
         */
        project?: string;
    }
    export interface Params$Resource$Projects$Topics$Publish extends StandardParameters {
        /**
         * The messages in the request will be published on this topic.
         */
        topic?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PublishRequest;
    }
    export interface Params$Resource$Projects$Topics$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Topics$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Topics$Subscriptions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * pubsub.projects.topics.subscriptions.list
         * @desc Lists the name of the subscriptions for this topic.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/pubsub.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const pubsub = google.pubsub('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/pubsub',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await pubsub.projects.topics.subscriptions.list({
         *     // Maximum number of subscription names to return.
         *     pageSize: 'placeholder-value',
         *     // The value returned by the last `ListTopicSubscriptionsResponse`; indicates
         *     // that this is a continuation of a prior `ListTopicSubscriptions` call, and
         *     // that the system should return the next page of data.
         *     pageToken: 'placeholder-value',
         *     // The name of the topic that subscriptions are attached to.
         *     topic: 'projects/my-project/topics/my-topic',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "subscriptions": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias pubsub.projects.topics.subscriptions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Maximum number of subscription names to return.
         * @param {string=} params.pageToken The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
         * @param {string} params.topic The name of the topic that subscriptions are attached to.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Topics$Subscriptions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Topics$Subscriptions$List, options?: MethodOptions): GaxiosPromise<Schema$ListTopicSubscriptionsResponse>;
        list(params: Params$Resource$Projects$Topics$Subscriptions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Topics$Subscriptions$List, options: MethodOptions | BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>, callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>): void;
        list(params: Params$Resource$Projects$Topics$Subscriptions$List, callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>): void;
    }
    export interface Params$Resource$Projects$Topics$Subscriptions$List extends StandardParameters {
        /**
         * Maximum number of subscription names to return.
         */
        pageSize?: number;
        /**
         * The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
         */
        pageToken?: string;
        /**
         * The name of the topic that subscriptions are attached to.
         */
        topic?: string;
    }
    export {};
}
